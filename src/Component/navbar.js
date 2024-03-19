import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';


export default function Navbar() {
  const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
        <div className='linking'>
            <NavLink to='/'>Home</NavLink>
            {auth.user==='admin'&&  
            <NavLink to='/Admin'>Admin</NavLink>}
            <NavLink to='/User'>User</NavLink>
            <NavLink to='/Profile'>Profile</NavLink>
            {!auth.user&&<NavLink to='/login'>Log In</NavLink>}
            {!auth.user&&<NavLink to='/signup'>Sign Up</NavLink>}
        </div>
      </nav>
    </div>
  )
}
