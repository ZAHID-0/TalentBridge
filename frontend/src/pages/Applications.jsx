import React from 'react'
import ApplicationMyJob from '../components/ApplicationMyJob'
import ApplicationCreate from '../components/ApplicationCreate'

function Applications() {
  return (
    <div className='min-h-screen flex'>
        <div className='w-2/12 min-h-screen border border-l-2 border-gray-400 p-6 text-gray-600'>
            <h2 className='font-bold text-gray-800'><span className='bg-blue-600 rounded-lg px-2 py-1 text-white'>T</span> TalentBridge</h2>
            <div className='w-full flex flex-col justify-start mt-4'>
                <button className='p-2 w-full rounded-xl text-start'>My Jobs</button>
                <button className='p-2 w-full rounded-xl text-start'>Create Job</button>
            </div>
            <button className='absolute bottom-9'>Logout</button>
        </div>
        <ApplicationMyJob />
        <ApplicationCreate />
    </div>
  )
}

export default Applications
