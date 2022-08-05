/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

const ThemeSwitcher = () => {
   const { theme, setTheme } = useContext(ThemeContext);
   return (
      <div>
         <button
            onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
            className="button-theme"
         >
            <img
               src={theme == 'dark' ? Sun : Moon}
               className="theme-icon"
               alt="theme"
            />
         </button>
      </div>
   );
};

export default ThemeSwitcher;
