import React from 'react'
import { assets } from '../assets/assets'
import { jobsData } from '../assets/assets'
import { useParams } from 'react-router-dom'
import Jobdetails from './Jobdetails'
import kconvert from 'k-convert'
import moment from 'moment'
const JobCard = () => {
  const {id}=useParams();
  const job=jobsData.find((item)=>item._id===id);
  return (<>
    <div className='  flex justify-between p-4 rounded-lg shadow-lg m-10 max-sm:flex-col border-2 border-blue-500 bg-blue-200'> 
        <div className='bg-blue-300 flex  gap-5 p-5 max-sm:px-3 rounded-lg'>
<img src={job.companyId.image} className='bg-white p-3 rounded-lg'/>
<div>
  <h2>{job.title}</h2>
  <div className='flex justify-center gap-5 max-sm:flex-col max-sm:gap-2'> 
   <span className='flex gap-2 mt-3'> 
    <img src={assets.suitcase_icon} className='h-5 w-5  '/>
  
  <h2>{job.companyId.name}</h2>
 </span> 
   <span className='flex gap-2 mt-3'> 
   <img src={assets.location_icon}/>
 
  <h2>{job.location}</h2>
   </span> 
   <span className='flex gap-2 mt-3'> 
   <img src={assets.person_icon}/>
 

  <h2>{job.level}</h2>
  </span>
   <span className='flex gap-2 mt-3'> 
   <img src={assets.money_icon}/>
 

  <h2>${ kconvert.convertTo(job.salary)}</h2>
  </span>
  </div>
</div>
        </div>
        <div className=' '>
<button className='bg-blue-800 rounded-lg p-4 text-white'>Apply Now</button>
<p>Posted {moment(job.date).fromNow()}</p>
        </div>
        
    </div>
     <Jobdetails id={id}/>
     </> 
  )
}

export default JobCard