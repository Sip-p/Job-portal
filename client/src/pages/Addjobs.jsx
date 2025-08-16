import React, { useEffect, useState,useRef } from 'react'
 import Quill from 'quill'
import { JobCategories, JobLocations  } from '../assets/assets';
const Addjobs = () => {
    const [title,setTitle]=useState('');
    const [location,setLocation]=useState('Bangalore');
    const [category,setCategory]=useState('Programming');
    const [level,setLevel]=useState('Beginner Level')
    const [salary,setSalary]=useState(0);
    const editorRef=useRef(null);
    const quillRef=useRef(null);

    useEffect(()=>{
//Inititate quill only once
if(!quillRef.current && editorRef.current){
    quillRef.current=new Quill(editorRef.current,{
        theme:'snow'
    })
}
    },[])
  return (
    <div className='m-4'> 
        <form className='container flex-col m-3'>
          <div className='my-2 py-3'>
<p>Job Title</p>
<input type='text' placeholder='Type here' onChange={(e)=>{setTitle(e.target.value)}} value={title} required/>
            </div>

             <div className='my-2 py-3'>
        <p>Job Description</p>
        <div ref={editorRef}>

        </div>
    </div>
    <div className='flex gap-9'>
        {/* //1 */}
        <div className='my-4 py-4'>
            <p className=''>Job Category</p>
            <select onChange={e=>setCategory(e.target.value)} className='bg-gray-300 rounded-md p-1 mt-2'>
                {JobCategories.map((category,idx)=>{
                    return <option key={idx}>{category}</option>
                })}
            </select>
        </div>
{/* 2 */}
  <div className='my-4 py-4'>
            <p>Job Location</p>
            <select onChange={e=>setLocation(e.target.value)}  className='bg-gray-300 rounded-md p-1 mt-2'>
                {JobLocations.map((location,idx)=>{
                    return <option key={idx}>{location}</option>
                })}
            </select>
        </div>


   <div className='my-4 py-4'>
            <p>Job Level</p>
            <select onChange={e=>setLevel(e.target.value)}  className='bg-gray-300 rounded-md p-1 mt-2'>
                <option value=" Beginer level"> Beginer level</option>
                 <option value="Intermediate level">Intermediate level</option>
                 <option value="Senior level">Senior level</option>
            </select>
        </div>

       
    </div>
      <div className='my-4 py-4'>
            <p>Salary</p>
                 <input type='Number'   className='bg-gray-300 rounded-md p-1 mt-2'
                 onChange={e=>{const value=Math.max(0,e.target.value);
                    setSalary(value);
                 }} placeholder='0'/>
          
        </div>
    <button className='bg-gray-700 py-3 px-4 rounded text-white'>Add</button>
        </form>
    </div>

    
  )
}

export default Addjobs