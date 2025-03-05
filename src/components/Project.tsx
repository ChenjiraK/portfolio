import React from 'react';
interface ProjectProps {
   projects: any;
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div>
      <div className='grid grid-cols-5'>
         {projects.map((project:any, i:number) => (
            <div key={`projects_${i}`} className='text-center'>
               <div className='h-16 w-16 m-auto content-end'>
                  <img className='w-full' src={project.image} alt={project.name} />
               </div>
               <p className='text-10 text-gray-400 pt-2'>{ project.name }</p>
            </div>
         ))}
         </div>
    </div>
  );
};

export default Project;
