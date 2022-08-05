import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import ThemeContext from './context/ThemeContext';

function App() {
   const [theme, setTheme] = useState('light');
   const value = { theme, setTheme };

   return (
      <div className="App">
         <ThemeContext.Provider value={value}>
            <Layout />
         </ThemeContext.Provider>
      </div>
   );
}

export default App;
