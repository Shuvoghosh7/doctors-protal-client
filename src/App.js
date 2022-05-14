import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navber from './Pages/Shared/Navber/Navber';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Singup from './Pages/Login/Singup';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navber/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/appointment' element={
         <RequireAuth>
           <Appointment/>
         </RequireAuth>
       }/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/singup' element={<Singup/>}/>
     </Routes>

    </div>
  );
}

export default App;
