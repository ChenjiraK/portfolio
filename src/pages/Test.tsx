import React from 'react';
import { useTheme } from '../context/ThemeContext.tsx';

const Test: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`h-svh ${ theme === 'light' ? 'bg-white' : 'bg-gray-800' }`}>
      <p className={`${ theme === 'light' ? 'text-gray-800' : 'text-white' }`}>Current Theme: {theme}</p>
      <button className='w-36 rounded-md bg-green-800 text-white py-3' onClick={toggleTheme}>
         Change Theme
      </button>
    </div>
  );
};

export default Test;
