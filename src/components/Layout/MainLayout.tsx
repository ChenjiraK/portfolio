import React, { ReactNode } from 'react';

type Props = {
   children: ReactNode;
   id?: string
};

const MainLayout: React.FC<Props> = ({ children, id }) => {
   return (
      <div id={id} className='flex justify-center border-t '>
         <div className='w-full max-w-[1080px]'>
            { children }
         </div>
      </div>
   );
};

export default MainLayout;
