import React from 'react'

function BrowsJobs() {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-white rounded-xl px-5 py-5 space-y-2 relative border-2'>
        <h1 className='text-black font-bold'>Job Title</h1>
        <p>Cpmpany Name</p>
        <div className='flex gap-2'> 
            <p>Localisation</p>
            <p>Employment Type</p>
        </div>
        <p>Description</p>
        <div className="flex justify-end pt-4">
            <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">Apply</button>
        </div>
      </div>
      
    </div>
  )
}

export default BrowsJobs
