import React, { useState } from 'react'
import ApplicationMyJob from '../components/ApplicationMyJob'
import ApplicationCreate from '../components/ApplicationCreate'
import { useAuth } from '../hooks/useAuth'

function Applications() {
    const [ApplicationType, setApplicationType] = useState("MyJobs");
    const {logout} = useAuth();
  return (
    <div className='h-screen flex'>
        <div className='w-2/12 h-screen border border-l-2 border-gray-400 p-6 text-gray-600'>
            <h2 className='font-bold text-gray-800'><span className='bg-blue-600 rounded-lg px-2 py-1 text-white'>T</span> TalentBridge</h2>
            <div className='w-full flex flex-col justify-start mt-4'>
                <button className={`p-2 w-full rounded-xl text-start ${ApplicationType === "MyJobs" ? "bg-blue-100" : ""}`} onClick={() => setApplicationType("MyJobs")}>My Jobs</button>
                <button className={`p-2 w-full rounded-xl text-start ${ApplicationType === "Create" ? "bg-blue-100" : ""}`} onClick={() => setApplicationType("Create")}>Create Job</button>
            </div>
            <button className='absolute bottom-9 hover:text-gray-900' onClick={logout}>Logout</button>
        </div>
        {ApplicationType === "MyJobs" ? <ApplicationMyJob /> : <ApplicationCreate />}
    </div>
  )
}

export default Applications
