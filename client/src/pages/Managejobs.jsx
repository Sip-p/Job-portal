import React from 'react'
import { assets, manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Managejobs = () => {
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
              manageJobsData.map((jobs, idx) => {
                return <tr key={idx} className='text-gray-700'>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{jobs._id}</td>
                  <td className='py-2 px-4 border-b'>{jobs.title}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{moment(jobs.date).format('ll')}</td>
                  <td className='py-2 px-4 border-b max-sm:hidden'>{jobs.location}</td>
                  <td className='py-2 px-4 border-b'>{jobs.applicants}</td>
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