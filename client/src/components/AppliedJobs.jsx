import React from 'react'
import { jobsApplied } from '../assets/assets'
import moment from 'moment'
const AppliedJobs = () => {
  return (
    <div className='flex justify-center'>
      <div className='p-4 w-full max-w-4xl'>
        <h2>Applied Jobs</h2>
        <table className='min-w-full border'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='p-2 text-left'>Company</th>
              <th className='p-2 text-left'>Job Title</th>
              <th className='p-2 text-left'>Location</th>
              <th className='p-2 text-left'>Date</th>
              <th className='p-2 text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, idx) => (
              <tr key={idx} className='border-b'>
                <td className='p-2 flex items-center gap-2'>
                  <img src={job.logo} alt='' className='w-8 h-8 object-contain' />
                  {job.company}
                </td>
                <td className='p-2'>{job.title}</td>
                <td className='p-2'>{job.location}</td>
                <td className='p-2'>{moment(job.date).format('ll')}</td>
                <td className='p-2'>
                  <span
                    className={`px-2 py-1 rounded 
                      ${job.status === 'Accepted' ? 'bg-green-500 text-white' : ''}
                      ${job.status === 'Rejected' ? 'bg-red-500 text-white' : ''}
                      ${job.status === 'Pending' ? 'bg-blue-500 text-white' : ''}
                    `}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppliedJobs