
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/navbar';
import Auth from './Component/Auth';
import Login from './Component/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './Component/signup';
import Admin from './Component/Admin';
import {User} from './Component/User';
import Profile from './Component/Profile';
function App() {
  return (
    
    <div className="App">
       <Auth>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        </Routes>
        </Auth>
    </div>
  );
}
export default App;
