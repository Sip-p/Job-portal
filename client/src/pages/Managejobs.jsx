import React, { useEffect } from 'react'
import { assets, manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
const Managejobs = () => {
  const {backendUrl,companyToken,alljobs,setAlljobs}=useContext(AppContext)
  const getDetails=async(e)=>
{
 try {
  const {data}=await axios.get(backendUrl+'/api/jobs/',{headers:{token:companyToken}})
console.log(data)
if(data.success){
  console.log(data)
    setAlljobs(data.jobs || []); // ensure only array is set
  toast.success(data.message);
}
else{
  toast.error('Missing credentials')
}
} catch (error) {
  toast.error(error.message)
  console.log(error.message)
}
}
useEffect(()=>{
   getDetails()
},[])
  const navigate = useNavigate();
  return (
    <div className='container p-4 max-w-5xl'>
      <div className='overflow-x-auto overflow-hidden '>
        <table className='min-w-full bg-white border-gray-200 max-sm:text-sm'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>#</th>
              <th className='py-2 px-4 border-b text-left'>Job Title</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Date</th>
              <th className='py-2 px-4 border-b text-left max-sm:hidden'>Location</th>
              <th className='py-2 px-4 border-b text-left'>Applicants</th>
              <th className='py-2 px-4 border-b text-left'>Visible</th>
            </tr>
          </thead>
          <tbody className=' '>
            {
              (alljobs || []).map((job, idx) => {
                return <tr key={idx} className='text-gray-700'>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{job._id}</td>
                  <td className='py-2 px-4 border-b'>{job.title}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{moment(job.date).format('ll')}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{job.location}</td>
                  <td className='py-2 px-4 border-b'>{job.applicants}</td>
                  <td className='py-2 px-4 border-b scale-125 text-center'>
                    <input type='checkbox'   />
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <div className='flex justify-end m-2'>
        <NavLink to={'/dashboard/add-job'} >

          <button className='bg-black px-3 py-2 text-white hover:bg-gray-700'>Add new jobs</button></NavLink></div>
    </div>
  )
}

export default Managejobs