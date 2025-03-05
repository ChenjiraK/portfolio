import React, { createContext, useContext, useState, ReactNode } from 'react';
//การทำ context คือการทำขึ้นเพื่อลด การส่ง props เข้าไปใน components (การกำหนด ContextType ในไฟล์ Context เลย)
//ข้อดีใช้สำหรับข้อมูลไม่ซับซ้อน
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// สร้าง Context และกำหนดค่าเริ่มต้นเป็น null
const ThemeContext = createContext<ThemeContextType | null>(null);
interface ThemeProviderProps {
   children: ReactNode;
 }
 
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
   const [theme, setTheme] = useState<'light' | 'dark'>('light');
 
   const toggleTheme = () => {
     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
   };
 
   return (
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
       {children}
     </ThemeContext.Provider>
   );
 };

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
     throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
};
 
 