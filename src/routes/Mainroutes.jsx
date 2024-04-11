import {Routes, Route} from 'react-router-dom'
import MovieDetail from '../pages/MovieDetail'
import Home from '../pages/Home'
import Error from '../pages/Error'

function Mainroutes() {
  return (
    <Routes> 
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/movie/:name' element = {<MovieDetail />} />
        <Route path='*' element = {<Error/>} />
    </Routes>
  )
}

export default Mainroutes;
