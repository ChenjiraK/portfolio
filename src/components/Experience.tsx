import React from 'react';

interface ExperienceProps {
   experiences: any;
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
   return (
      <div>
         {experiences.map((experience:any, i:number) => (
            <div className='flex pb-6' key={`experience_${i}`}>
               <button className='border border-black p-4 rounded-32px w-60 text-center'>
                  { experience.start} { experience.end ? `- ${experience.end}` : '' }
               </button>
               <div className='ml-7 self-center'>
                  <p className="hover:underline cursor-pointer text-16 text-black">{ experience.company }</p>
                  <p>{ experience.position }</p>
               </div>
            </div>
         ))}

         <div id='feature' className='mt-16 py-7 border-t'>
            <h1 className='pb-6'>My Projects</h1>
            {experiences.map((experience:any, i:number) => (
               <div className='pb-4 flex min-h-96' key={`experience_detail_${i}`}>
                  <div>
                     <h3>{ experience.company }</h3>
                     <p><b>Position : </b> { experience.position }</p>
                     <p className='text-12'>{ experience.start} { experience.end ? `- ${experience.end}` : '' }</p>
                     <div className='pt-3'>
                        {experience.feature.map((feature:any, i:number) => (
                           <p>
                              - { feature }
                           </p>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Experience;
