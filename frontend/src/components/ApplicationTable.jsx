import React from 'react'

function ApplicationTable() {
  return (
    <div className='w-full mt-5 '>
      <table className='w-full border-collapse border-gray-200 border-2 rounded-2xl'>
        <tr className='text-gray-400 h-10'>
            <th>Job Title</th>
            <th>Location</th>
            <th>Employment Type</th>
            <th>Applicants</th>
            <th>Actions</th>
        </tr>
        
      </table>
    </div>
  )
}

export default ApplicationTable
