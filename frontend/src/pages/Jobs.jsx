import React from 'react'
import BrowsJobs from '../components/BrowsJobs'

function Jobs() {
  return (
    <div className='min-h-screen flex'>
        <div className='w-2/12 min-h-screen border border-l-2 border-gray-400 p-6 text-gray-600'>
            <h2 className='font-bold text-gray-800'><span className='bg-blue-600 rounded-lg px-2 py-1 text-white'>T</span> TalentBridge</h2>
            <div className='w-full flex flex-col justify-start mt-4'>
                <button className='p-2 w-full rounded-xl text-start'>Brows Jobs</button>
            </div>
            <button className='absolute bottom-9'>Logout</button>
        </div>
       <div className='w-full min-h-scree px-28 py-10 bg-gray-100'> 
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>Browse Jobs</h1>
                    <p className='text-gray-500'>Find your next engineering role.</p>
                </div>
            </div>
            <div className='mt-8 space-y-4 text-gray-700'>
                <input type="text" placeholder='Search Job or Company...' className='w-full border px-4 py-2 bg-white rounded-2xl'/>
                <div className='grid grid-flow-col gap-6'>
                    <select name="Location" className='w-full rounded-xl border px-4 py-2 bg-white'>
                        <option value="Marrakech">Marrakech</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                    </select>
                    <select name="EmploymentType" className='w-full rounded-xl border px-4 py-2 bg-white'>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                    </select>
                    <div />
                </div>
                <BrowsJobs />
            </div>
        </div>
    </div>
  )
}

export default Jobs
