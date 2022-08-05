/* eslint-disable eqeqeq */
import React, { useContext } from 'react';
import Header from './Header';
import ThemeContext from '../context/ThemeContext';

const Layout = ({ toggleTheme }) => {
   const { theme } = useContext(ThemeContext);
   const bg =
      theme == 'dark'
         ? 'body {background-color: #404042; color:gray;}'
         : 'body {background-color: #fff; color:#000}';
   return (
      <div>
         <style>{bg}</style>
         <Header />
         {toggleTheme}
      </div>
   );
};

export default Layout;
