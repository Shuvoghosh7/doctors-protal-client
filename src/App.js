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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReview from './Pages/DashBoard/MyReview/MyReview'
import MyHistory from './Pages/DashBoard/MyHistory';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/DashBoard/AddDoctor';
import ManageDoctor from './Pages/DashBoard/ManageDoctor';
import Payment from './Pages/DashBoard/Payment';

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
       <Route path='/dashboard' element={
         <RequireAuth>
           <DashBoard/>
         </RequireAuth>
       }>
         <Route index element={<MyAppointment/>}/>
         <Route path='review' element={<MyReview/>} />
         <Route path='history' element={<MyHistory/>} />
         <Route path='payment/:id' element={<Payment/>} />
         <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>} />
         <Route path='addDoctor' element={<RequireAdmin><AddDoctor/></RequireAdmin>} />
         <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor/></RequireAdmin>} />
       </Route>
       <Route path='/login' element={<Login/>}/>
       <Route path='/singup' element={<Singup/>}/>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
