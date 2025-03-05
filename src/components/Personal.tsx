import React from 'react';

interface PersonalProps {
   data: any;
}

export const Personal: React.FC<PersonalProps> = ({ data }) => {
  return (
    <div className='flex'>
      <div id="contact" className='px-4'>
          <img className='h-60 w-60 rounded-full' src={data.imageProfile} alt='image-profile'/>
          <h1 className='font-bold pb-4'>Contact</h1>
          <div className='pb-2'>{ data.name }</div>
          <p><b>Phone:</b> { data.phoneNumber }</p>
          <p><b>Email:</b> { data.email }</p>
          <p><b>Nationality:</b> { data.nationality }</p>
          <p><b>Birth Date:</b> { data.birthDate }</p>
          <p><b>Linkedin:</b><a className='text-success' href={data.linkedin} target="_blank" rel="noreferrer">{data.linkedin}</a></p>
      </div>
      <div id="personal-summary">
          <h1 className='pb-4'>Personal Summary</h1>
          <p dangerouslySetInnerHTML={{ __html: data.personalSummary }}></p>

          <h1 className='pb-4 pt-9'>Education</h1>
          <h4 className='font-bold'>{ data.education.university}</h4>
          <p>{ data.education.major}</p>
      </div>
    </div>
  );
};

export default Personal;
