import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { assets } from '../assets/assets';
import AppliedJobs from '../components/AppliedJobs';
const Applications = () => {
  const [resume,setResume]=useState('Resume');
  const[uploaded,setUploaded]=useState(false)
  // const[edit,setEdit]=useState(false)
  // const [save,setSave]=useState(false)
  const handelChange=(val)=>{
setResume(val)
setUploaded(true)
  }
 
  return (
    <div> 
      <Navbar/>
        <div className='container 2xl:px-20 mx-auto my-10 px-12  flex flex-col      '>
        <h2>Your Resume</h2>
        <div className='flex mt-4 gap-4'>
          <button className='bg-sky-200 text-sky-800 p-1 rounded-lg'>{resume}</button> 
       {/* {uploaded && <button className={`px-3 rounded-md border-1 disabled `} onClick={()=>{handelEdit()}}>Edit</button>} */}
      {/* {edit &&           <button className='bg-sky-200 text-sky-800 p-1 rounded-lg' onClick={()=>{setSave(true)}}>save</button>  */}

<label className="cursor-pointer flex items-center gap-2">
  <input type='file' className='hidden' onChange={(e)=>{if(e.target.files && e.target.files[0]){
    setResume(e.target.files[0].name)
    setUploaded(true)
  }}}/>
  <img src={assets.profile_upload_icon}  />
</label> 
 
        </div>
      </div>
      <AppliedJobs/>
    </div>
  )
}

export default Applications