import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
   const { theme } = useContext(ThemeContext);
   return (
      <div bg={theme} varient={theme}>
         <ThemeSwitcher />
         <h1>Toogle Theme</h1>
      </div>
   );
};

export default Header;
