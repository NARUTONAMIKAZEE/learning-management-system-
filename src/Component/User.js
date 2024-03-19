import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './user.css'
import man from './man.jfif'
export const User = () => {
  const[post ,setPost]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/students')
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  },[])
  return (
    <div>
      <div className='user-details'>User details</div>
    <div className='flex-container'>{
      post.map (x=>
        <div className='flex-item'>
          <img src={man} height='100px'/>
        <h1>ID:{x.id}</h1>
        <h1>NAME:{x.name}</h1>
        <h1>COURSE:{x.age}</h1>
        <h1>FEES:{x.fees}</h1>
        </div>
      )
    }
    </div>
    </div>
  )
}
