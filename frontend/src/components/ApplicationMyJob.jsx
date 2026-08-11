import React from 'react'
import ApplicationTable from './ApplicationTable'

function ApplicationMyJob() {
  return (
    <div className='w-full h-screen p-10 overflow-y-auto'> 
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>My Jobs</h1>
                    <p className='text-gray-500'>Published Openings</p>
                </div>
            </div>
            <ApplicationTable />
    </div>
  )
}

export default ApplicationMyJob
