import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Pages/Shared/Navber/Navber';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/appointment' element={<Appointment/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>

    </div>
  );
}

export default App;
