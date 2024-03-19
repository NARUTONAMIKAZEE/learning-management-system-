import axios from 'axios'
import './form.css'
import React, { useEffect, useState } from 'react'

export default function Admin() {
  const[post,setPost]=useState([])
    const[id,setId]=useState(0)
    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[popup,setPopup]=useState(false)
    const[id1,setId1]=useState(0)
    const[name1,setName1]=useState('')
    const[age1,setAge1]=useState('')
    const[fees,setFees]=useState(0)
    const[fees1,setFees1]=useState(0)
    const openpopup=(datas)=>{
        setPopup(true)
        setId1(datas.id)
        setName1(datas.name)
        setAge1(datas.age)
        setFees1(datas.fees)
    }
    const handleUpdate=()=>{
        axios.put(`http://localhost:3001/students/${id1}`,
        {
            "id":id1,"name":name1,"age":age1,"fees":fees1
        })
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    useEffect(()=>{
        axios.get("http://localhost:3001/students")
        .then(res=>{setPost(res.data)})
        .catch(err=>console.log(err))
    })
    const handleSubmit=()=>{
        axios.post("http://localhost:3001/students",{
        "id":id,"name":name,"age":age,"fees":fees
    }
        ).then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/students/${id}`)
        .then(res=>console.log(res))
        .catch(err=>(console.log(err)))
    }
  return (
    <div className='containerS'>
        
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
            <br></br>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <label>Course</label>
            <input type='text' value={age} onChange={(e)=>setAge(e.target.value)}/>
            <br></br>
            <label>fees</label>
            <input type='number' value={fees} onChange={(e)=>setFees(e.target.value)}/>
            <br></br>
            <button type='submit'>submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Fees</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {post.map(x=>
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.fees}</td>
                    <td>
                        <button onClick={()=>openpopup(x)}>Update</button>
                        <button onClick={()=>handleDelete(x.id)}>Delete</button>
                    </td>
                  </tr>  
                    )}
            </tbody>
        </table>
        {popup &&  <div className='popup'><form onSubmit={handleUpdate}>
           
            <button onClick={()=>setPopup(false)}>X</button><label>Id:</label>
            <input type='number' value={id1} onChange={(e)=>setId1(e.target.value)}/>
            <br></br>
            <label>Name:</label>
            <input type='text' value={name1} onChange={(e)=>setName1(e.target.value)}/>
            <br></br>
            <label>course</label>
            <input type='text' value={age1} onChange={(e)=>setAge1(e.target.value)}/>
            <br></br>
            <label>fees</label>
            <input type='number' value={fees1} onChange={(e)=>setFees1(e.target.value)}/>
            <br></br>
            <button type='submit'>submit</button>
        </form></div>}
    </div>
  )
}