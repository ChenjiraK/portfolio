import React, { ReactNode } from 'react';

type Props = {
   children: ReactNode;
   id?: string
};

const MainLayout: React.FC<Props> = ({ children, id }) => {
   return (
      <section id={id} data-section aria-labelledby={id ? `${id}-title` : undefined} className='scroll-mt-24 border-t border-black/10 py-16 md:py-24'>
         <div className='w-full'>
            { children }
         </div>
      </section>
   );
};

export default MainLayout;
