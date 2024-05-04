import './App.css'

//context import 
import ThemeContext from './context/ThemeContext';

/// Components Import 
import Navbar from './components/Navbar/Navbar';
import Mainroutes from './routes/Mainroutes';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark');
  console.log(import.meta.env.VITE_API_KEY);

  useEffect(() => {
    const userTheme = localStorage.getItem('app-theme');
    if(userTheme != null){
      setTheme(userTheme);
    }   
  }, []);

  return (
    <>
      <ThemeContext.Provider value = {{theme, setTheme}}>
          <div id='app-wrapper' data-theme = {theme}>
              <Navbar/>
              <Mainroutes />
          </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
