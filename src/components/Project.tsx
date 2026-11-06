import React from 'react';
interface ProjectProps {
   projects: {
      name: string;
      git: string;
      image: string[];
      detail: string[];
      features: string[];
   }[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
   <div id="feature">
      {projects.map((project) => (
      <article data-reveal key={project.name} className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[360px_1fr] md:gap-12">
         <div>
            <h2 className="font-medium leading-7">{project.name}</h2>
            <div className='flex mt-3'>
               <img width={20} height={20} className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" src={require("../assets/icon/github.webp")} alt="" />
               <a className="mt-2 text-xs leading-6 ml-2" href={project.git} target='_blank'>Link Github</a>
            </div>
         </div>
         <ul className="space-y-3 pl-4">
            {project.features.map((feature) => (
               <li key={feature} className="list-disc pl-1 text-sm leading-7 text-black/55 marker:text-green-2B5F44">{feature}</li>
            ))}
         </ul>
      </article>
      ))}
   </div>
  );
};

export default Project;
