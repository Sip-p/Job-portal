import React from 'react'
import { assets } from '../assets/assets'
import { jobsData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from './Footer'
const Jobdetails = ({id}) => {
  
    const job=jobsData.find((job)=>job._id===id)
    const similarjobs=jobsData.filter((item)=>item.companyId._id===job.companyId._id && item._id!==id);
  return (
    <div className='   grid grid-cols-[2fr_1fr] p-4 rounded-lg shadow-lg m-10 max-sm:flex-col'> 
        <div className='  p-4 rounded-lg'>
            <h2>Job Description</h2>
 <p   dangerouslySetInnerHTML={{__html:job.description } } className='text-sm text-gray-600 max-sm:hidden'></p>
 
 <button className='bg-blue-800 p-3 m-4 rounded-lg mt-7'  >Apply Now</button>
 
             </div> 
             
        <div className='  p-4 m-4 rounded-lg flex flex-col items-center '>  
        {
            similarjobs.slice(0,3).map((item,idx)=>{
                return (
                    <div key={idx} className='border border-gray-500 shadow-2xl p-4 rounded-lg w-full hover:shadow-xl transition-all duration-300 ease-in-out mx-sm:h-1/2 mr-4 mb-4'> 
                        <img src={item.companyId.image}/>
                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                        <p className='text-sm text-gray-600'>{item.companyId.name}</p>
                        <p className='text-sm text-gray-600'>{item.location}</p>
                        <Link to={`/apply-job/${item._id}`}> 
                            <button className='bg-blue-500 rounded-2xl p-2 m-2 text-white' >Apply Now</button>
                            <button className='bg-gray-300 rounded-2xl p-2 m-2'>Learn More</button>
                        </Link>
                         
                    </div>
 
                    
                )
            })
        }
 
         </div>
         <Footer/>
       </div>
  )
}

export default Jobdetails