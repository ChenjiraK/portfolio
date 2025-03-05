import React from 'react';

interface SkillProps {
  skill: any;
}
 

const Skills: React.FC<SkillProps> = ({ skill }) => {
  const SkillItem: React.FC<{ skills: { name: string; imageUrl: string }[] }> = ({ skills }) => {
    return (
      <div>
        {skills.map((skill, i) => (
          <div className='flex pt-3' key={i}>
            <img className='w-7' src={skill.imageUrl} alt={skill.name} />
            <span className='pl-2 self-center'>{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <div>
      <div className='grid grid-cols-3'>
          <div>
            <h3>Frontend</h3>
            <SkillItem skills={skill.frontend} key='frontend' />
          </div>
          <div>
            <h3>Backend</h3>
            <SkillItem skills={skill.backend} key='backend' />

            <h3 className='pt-4'>Database</h3>
            <SkillItem skills={skill.database} key='database' />
          </div>
          <div>
            <h3>Testing</h3>
            <SkillItem skills={skill.testing} key='testing' />

            <h3 className='pt-4'>Git Version Control</h3>
            <SkillItem skills={skill.git} key='git' />
          </div>
        </div>
    </div>
  );
};

export default Skills;
