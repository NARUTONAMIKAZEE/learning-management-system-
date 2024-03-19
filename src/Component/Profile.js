import React from 'react'
import { useAuth } from './Auth'

export default function Profile() {
    const auth=useAuth()
    const handleLogout=()=>{
      auth.logout()
    }
  return (
    <div>
    <h1>Welcome User {auth.user}</h1><br></br>
    <button className='butn' onClick={handleLogout}>Log Out</button></div>
  )
}
