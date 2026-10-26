import React from 'react';

type Skill = { name: string; imageUrl: string };
interface SkillProps {
  skill: Record<'frontend' | 'backend' | 'testing' | 'database' | 'git', Skill[]>;
}

const Skills: React.FC<SkillProps> = ({ skill }) => {
  const groups = [
    { title: 'Frontend', items: skill.frontend },
    { title: 'Backend', items: skill.backend },
    { title: 'Testing', items: skill.testing },
    { title: 'Database', items: skill.database },
    { title: 'Git Version Control', items: skill.git },
  ];

  return (
    <div className="space-y-10">
      {groups.map(({ title, items }) => (
        <div key={title}>
          <h3 data-reveal className="mb-4 !text-sm">{title}</h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <li data-reveal key={item.name}>
                <div className="group flex h-full items-center gap-4 rounded-2xl border border-black/10 bg-white/40 p-5 transition-[background-color,border-color,transform] duration-300 hover:-translate-y-1 hover:border-green-2B5F44/40 hover:bg-white/80 motion-reduce:transform-none motion-reduce:transition-none">
                  <img width={32} height={32} className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" src={item.imageUrl} alt="" />
                  <span className="text-sm !text-inherit">{item.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
