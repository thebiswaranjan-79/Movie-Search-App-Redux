import './App.css'
import Mainroutes from './routes/Mainroutes';

function App() {
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <nav>Simple Nav</nav>
      <Mainroutes />
    </>
  )
};

export default App;
