import { RefObject } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function usePortfolioMotion(
  scope: RefObject<HTMLDivElement>,
  onSectionChange: (section: string) => void,
) {
  useGSAP(() => {
    const root = scope.current;
    if (!root) return;

    root.querySelectorAll<HTMLElement>('[data-section]').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 40%',
        end: 'bottom 40%',
        onToggle: ({ isActive }) => {
          if (isActive) onSectionChange(section.id);
        },
      });
    });

    // matchMedia reverts inline styles and tweens when the preference changes.
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', (context) => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
      intro.from(root.querySelectorAll('[data-hero-line]'), {
        yPercent: 110, rotate: 2, duration: 1.1, stagger: 0.14,
      }).from(root.querySelectorAll('[data-hero-detail]'), {
        opacity: 0, y: 20, duration: 0.75, stagger: 0.1,
        clearProps: 'transform,opacity',
      }, 0.35);

      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', root);
      gsap.set(items, { opacity: 0, y: 28 });
      // Batch callbacks run later; register their tweens in this media context.
      context.add('revealBatch', (batch: Element[]) => gsap.to(batch, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.09,
        ease: 'power3.out', overwrite: 'auto',
        clearProps: 'transform,opacity',
      }));
      ScrollTrigger.batch(items, {
        start: 'top 92%',
        once: true,
        interval: 0.08,
        batchMax: 4,
        onEnter: (batch) => context.revealBatch(batch),
      });

      // Keyboard focus must never land on content that is still transparent.
      const revealFocusedItem = (event: FocusEvent) => {
        const item = (event.target as HTMLElement).closest('[data-reveal]');
        if (item) {
          gsap.killTweensOf(item);
          gsap.set(item, { clearProps: 'transform,opacity' });
        }
      };
      root.addEventListener('focusin', revealFocusedItem);
      return () => root.removeEventListener('focusin', revealFocusedItem);
    });

    media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      gsap.to(root.querySelector('[data-hero-orbit]'), {
        y: 90, rotate: 30, ease: 'none',
        scrollTrigger: {
          trigger: root.querySelector('#home'), start: 'top top', end: 'bottom top', scrub: 1,
        },
      });
    });

    gsap.to(root.querySelector('[data-scroll-progress]'), {
      scaleX: 1, ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: true },
    });

    // Images have explicit sizes; refresh once fonts have settled as well.
    let mounted = true;
    document.fonts?.ready.then(() => { if (mounted) ScrollTrigger.refresh(); });
    return () => { mounted = false; media.revert(); };
  }, { scope, dependencies: [onSectionChange] });
}
