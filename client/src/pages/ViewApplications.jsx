import React from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

const ViewApplications = () => {
  return (
    <div className="m-9 overflow-x-auto">
      <table className="border-2 w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 max-sm:hidden ">#</th>
            <th className="px-4 py-2 max-sm:hidden">User Name</th>
            <th className="px-4 py-2 bg-green-500">Job Title</th>
            <th className="px-4 py-2 bg-blue-500">Location</th>
            <th className="px-4 py-2  ">Resume</th>
            <th className="px-4 py-2 bg-yellow-600  ">Action</th>
          </tr>
        </thead>
        <tbody>
          {viewApplicationsPageData.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2 bg-red-300 max-sm:hidden">{item._id}</td>
              <td className="px-4 py-2 flex items-center max-sm:hidden">
                <img src={item.imgSrc} alt="User" className="h-10 w-10 rounded-full mr-2" />
                <span className=''>{item.name}</span>
              </td>
              <td className="px-4 py-2 bg-green-400">{item.jobTitle}</td>
              <td className="px-4 py-2 bg-blue-400">{item.location}</td>
              <td className="px-4 py-2 bg-pink-300  ">
                <a href="" target="_blank" className="flex items-center gap-2">
                  Resume
                  <img src={assets.resume_download_icon} alt="Download Icon" />
                </a>
              </td>
              <td className="px-4 py-2">
                <button className="w-full px-4 py-1 text-blue-500 hover:bg-gray-100 bg-green-300 rounded-md">
                  Accept
                </button>
                <button className="w-full px-4 py-1 text-red-500 hover:bg-gray-100 bg-red-300 rounded-md mt-2">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplications;