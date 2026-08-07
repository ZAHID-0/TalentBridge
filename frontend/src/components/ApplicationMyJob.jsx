import React from 'react'
import ApplicationTable from './ApplicationTable'

function ApplicationMyJob() {
  return (
    <div className='w-full min-h-scree p-10 hidden'> 
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>My Jobs</h1>
                    <p className='text-gray-500'>3 published openings</p>
                </div>
                <button className='bg-blue-500 px-8 rounded-xl my-3 text-white'>Create Job</button>
            </div>
            <ApplicationTable />
    </div>
  )
}

export default ApplicationMyJob
