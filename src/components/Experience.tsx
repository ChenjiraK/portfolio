import React from 'react';

type ExperienceItem = {
  start: string;
  end: string;
  company: string;
  position: string;
  feature: string[];
  detail: string;
};

const Experience: React.FC<{ experiences: ExperienceItem[] }> = ({ experiences }) => (
  <div>
    <ol className="space-y-4">
      {experiences.map((experience, _) => (
        <li data-reveal key={experience.company}>
          <div className="group relative grid gap-4 rounded-2xl border border-black/10 bg-white/40 p-6 transition-colors duration-300 hover:border-green-2B5F44/30 hover:bg-white/70 md:grid-cols-[220px_1fr] md:gap-8 md:p-8 motion-reduce:transition-none">
            <div>
              <h4 className="font-medium leading-7">{experience.company}</h4>
              <p className="mt-2 text-xs leading-6">{experience.position}</p>
              <p className="mt-2 text-xs">{experience.start}{experience.end ? ` — ${experience.end}` : ''}</p>
            </div>
            <div>
              <p className=' !text-gray-600'>
                {experience.detail}
              </p>
              <ul className="space-y-3 pl-4 pt-5">
                {experience.feature.map((feature) => (
                  <li key={feature} className="list-disc pl-1 text-sm leading-7 text-black/55 marker:text-green-2B5F44">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Experience;
