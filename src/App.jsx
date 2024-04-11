import './App.css'
import Navbar from './components/Navbar/Navbar';
import Mainroutes from './routes/Mainroutes';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <Navbar/>
      <Mainroutes />
    </>
  )
};

export default App;
