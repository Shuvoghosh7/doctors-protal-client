import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Pages/Shared/Navber/Navber';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>

    </div>
  );
}

export default App;
