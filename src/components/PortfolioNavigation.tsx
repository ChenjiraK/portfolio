import React, { useEffect, useRef, useState } from 'react';

export const portfolioSections = [
  { id: 'personal', name: 'Personal' },
  { id: 'skill', name: 'Skill' },
  { id: 'experience', name: 'Experience' },
];

const PortfolioNavigation: React.FC<{ active: string; onNavigate: (id: string) => void }> = ({ active, onNavigate }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const frameRef = useRef(0);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktop.matches) {
        cancelAnimationFrame(frameRef.current);
        setOpen(false);
        dialogRef.current?.close();
      }
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      cancelAnimationFrame(frameRef.current);
      clearTimeout(closeTimerRef.current);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, []);

  const showMenu = () => {
    clearTimeout(closeTimerRef.current);
    dialogRef.current?.showModal();
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = requestAnimationFrame(() => setOpen(true));
    });
  };

  const closeMenu = () => {
    cancelAnimationFrame(frameRef.current);
    setOpen(false);
    if (!open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialogRef.current?.close();
    } else {
      // Also close if reduced motion is enabled while the exit is running.
      closeTimerRef.current = setTimeout(() => dialogRef.current?.close(), 500);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-primary/95 backdrop-blur-xl">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:p-3">Skip to content</a>
      <div className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-4 md:px-10">
        <button type="button" onClick={() => onNavigate('home')} aria-label="Back to top" className="rounded text-xl font-bold tracking-tighter">Home</button>
        <nav aria-label="Portfolio sections" className="hidden gap-2 md:flex">
          {portfolioSections.map(({ id, name }, index) => (
            <button key={id} type="button" onClick={() => onNavigate(id)} aria-current={active === id ? 'location' : undefined}
              className={`rounded-full px-5 py-2.5 text-xs transition-colors duration-300 motion-reduce:transition-none ${active === id ? 'bg-black text-white' : 'hover:bg-black/5'}`}>
              <span className="mr-2 !text-inherit opacity-50">0{index + 1}</span>{name}
            </button>
          ))}
        </nav>
        <span className="hidden text-[10px] uppercase tracking-[0.16em] !text-black/50 md:block">Developer / Portfolio</span>
        <button type="button" onClick={showMenu} aria-label="Open navigation menu" aria-expanded={open} aria-controls="portfolio-menu" className="flex items-center gap-3 rounded-full border border-black/20 px-4 py-2 text-xs md:hidden">Menu <span aria-hidden="true" className="!text-inherit">☰</span></button>
      </div>
      <div aria-hidden="true" data-scroll-progress className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-green-2B5F44" />

      <dialog ref={dialogRef} id="portfolio-menu" aria-labelledby="menu-title"
        onKeyDown={(event) => {
          if (event.key !== 'Tab') return;
          const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>('button');
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right) closeMenu();
        }}
        onTransitionEnd={(event) => {
          if (event.target === event.currentTarget && event.propertyName === 'transform' && !open) dialogRef.current?.close();
        }}
        className={`fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-[min(90vw,380px)] max-w-none border-l border-black/10 bg-primary p-7 text-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] backdrop:bg-black/40 motion-reduce:transition-none ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <h2 id="menu-title" className="!text-sm !font-normal uppercase tracking-widest">Navigation</h2>
          <button type="button" onClick={closeMenu} aria-label="Close navigation menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-xl">×</button>
        </div>
        <nav aria-label="Mobile portfolio sections" className="mt-20 space-y-5">
          {portfolioSections.map(({ id, name }, index) => (
            <button key={id} type="button" aria-current={active === id ? 'location' : undefined}
              onClick={() => {
                // Let the panel finish its exit while the page navigates.
                closeMenu();
                onNavigate(id);
              }} className="group flex w-full items-center gap-4 rounded py-3 text-left text-3xl tracking-tight hover:text-green-2B5F44">
              <span className="text-xs !text-black/40">0{index + 1}</span>{name}
              <span aria-hidden="true" className="ml-auto !text-inherit transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">↗</span>
            </button>
          ))}
        </nav>
        <p className="mt-20 text-xs uppercase tracking-widest !text-black/40">Chenjira Khamchiang</p>
      </dialog>
    </header>
  );
};

export default PortfolioNavigation;
