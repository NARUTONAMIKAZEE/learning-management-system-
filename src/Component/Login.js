import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'


export default function Login() {
    const navigate=useNavigate()
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[userList,setUserList]=useState('')
    useEffect(()=>{
      axios.get('http://localhost:3001/users').then(res=>setUserList(res.data)).catch(err=>console.log(err))
    },[])
  const auth=useAuth()
  const handleLogin=()=>{
    const userExist=userList.some(u=>u.username===username&&u.password===password)
    if(userExist){
      auth.login(username)
      navigate('/')
    }
    else{
      alert("Invalid Username or Password")
    }
  }
  return (
    <div className='form'>
        <div className='login'>
      <form onSubmit={handleLogin}>
      <h2>Login</h2>
        <label>Username</label>
        <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <br></br>
        <label>Password</label>
        <input type='password' class='ht' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br></br>
        <button type='submit'>Login</button><br></br><br></br>
        <Link to='/signup'>Don't have an account?Sign Up</Link>
      </form>
      </div>
    </div>
  )
}