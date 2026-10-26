import React from 'react';

type ExperienceItem = {
  start: string;
  end: string;
  company: string;
  position: string;
  feature: string[];
};

const Experience: React.FC<{ experiences: ExperienceItem[] }> = ({ experiences }) => (
  <div>
    <ol className="space-y-4">
      {experiences.map((experience, index) => (
        <li data-reveal key={experience.company}>
          <div className="group relative grid gap-4 rounded-2xl border border-black/10 bg-white/40 p-6 transition-colors duration-300 hover:border-green-2B5F44/30 hover:bg-white/70 md:grid-cols-[220px_1fr] md:gap-8 md:p-8 motion-reduce:transition-none">
            <div className="flex items-center gap-3 text-xs text-black/50">
              <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${index === 0 ? 'bg-green-2B5F44' : 'bg-black/20'}`} />
              {experience.start}{experience.end ? ` — ${experience.end}` : ''}
            </div>
            <div>
              <h3 className="!text-base !font-medium !leading-6">{experience.company}</h3>
              <p className="mt-2">{experience.position}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>

    <div id="feature" className="mt-20 border-t border-black/10 pt-12">
      <h3 data-reveal className="mb-8 !text-2xl !font-medium tracking-tight">My Projects</h3>
      {experiences.map((experience) => (
        <article data-reveal key={experience.company} className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[260px_1fr] md:gap-12">
          <div>
            <h4 className="font-medium leading-7">{experience.company}</h4>
            <p className="mt-2 text-xs leading-6">{experience.position}</p>
            <p className="mt-2 text-xs">{experience.start}{experience.end ? ` — ${experience.end}` : ''}</p>
          </div>
          <ul className="space-y-3 pl-4">
            {experience.feature.map((feature) => (
              <li key={feature} className="list-disc pl-1 text-sm leading-7 text-black/55 marker:text-green-2B5F44">{feature}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </div>
);

export default Experience;
