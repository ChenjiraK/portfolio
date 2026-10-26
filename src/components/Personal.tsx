import React from 'react';

interface PersonalProps {
   data: any;
}

export const Personal: React.FC<PersonalProps> = ({ data }) => {
  return (
    <div className='grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16'>
      <div data-reveal id="contact" className='min-w-0 rounded-3xl border border-black/10 bg-white/40 p-6 md:p-8'>
          <div className='mb-7 h-40 w-40 overflow-hidden rounded-full'>
            <img width={160} height={160} className='h-full w-full object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transform-none' src={data.imageProfile} alt={data.name}/>
          </div>
          <h3 className='font-bold pb-4'>Contact</h3>
          <div className='pb-2'>{ data.name }</div>
          <p className='leading-7'><b>Phone:</b> <a className='rounded hover:text-green-2B5F44' href={`tel:${data.phoneNumber}`}>{ data.phoneNumber }</a></p>
          <p className='break-words leading-7'><b>Email:</b> <a className='rounded hover:text-green-2B5F44' href={`mailto:${data.email}`}>{ data.email }</a></p>
          <p className='leading-7'><b>Nationality:</b> { data.nationality }</p>
          <p className='leading-7'><b>Birth Date:</b> { data.birthDate }</p>
          <p className='mt-4'><a className='group inline-flex items-center gap-2 rounded text-green-2B5F44 hover:underline' href={data.linkedin} target="_blank" rel="noreferrer">
          <img width={30} height={30} src={data.linkedinIcon} />
            LinkedIn profile 
            <span aria-hidden="true" className='!text-inherit transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none'>↗</span></a>
          </p>
      </div>
      <div id="personal-summary" className='min-w-0'>
          <div data-reveal>
            <h3 className='pb-4'>Personal Summary</h3>
            <p className='leading-7' dangerouslySetInnerHTML={{ __html: data.personalSummary }}></p>
          </div>
          <div data-reveal className='mt-10 border-t border-black/10 pt-8'>
            <h3 className='pb-4'>Education</h3>
            <h4 className='pb-2 font-medium leading-7'>{ data.education.university}</h4>
            <p className='leading-7'>{ data.education.major}</p>
          </div>
      </div>
    </div>
  );
};

export default Personal;
