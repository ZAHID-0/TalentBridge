import React from 'react'

function ApplicationCreate() {
  return (
    <div className='w-full min-h-scree p-10 bg-gray-100'> 
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>Create job</h1>
                    <p className='text-gray-500'>Publish a new opening.</p>
                </div>
            </div>
            <form action="" className="w-full max-w-3xl mx-auto space-y-5 px-10 py-10 rounded-3xl mt-10 bg-white">
                <div className='space-y-2'>
                    <label htmlFor="JobTitle" className='text-black block'>Job Title</label>
                    <input type="text" placeholder='Backend Engineer' className='w-full rounded-lg border px-4 py-2' />
                </div>
                <div className='space-y-2'>
                    <label htmlFor="Company" className='text-black block'>Company</label>
                    <input type= "text" placeholder='Company Name' className='w-full rounded-lg border px-4 py-2' />
                </div>
                <div className='grid grid-flow-col gap-6'>
                    <div className='space-y-2'>
                        <label htmlFor="Location" className='text-black block'>Location</label>
                        <input type= "text" placeholder='ex: Morocco' className='w-full rounded-lg border px-4 py-2' />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="Employment" className='text-black block'>Employment Type</label>
                        <select name="EmploymentType" id="Employment" className='w-full rounded-lg border px-4 py-2 bg-white'>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Internship">Internship</option>
                        </select>
                    </div>
                </div>
                <div className='space-y-2'>
                    <label htmlFor="Description" className='text-black block'>Description</label>
                    <textarea name="Description" className='w-full rounded-lg border px-4 py-2' rows={5}></textarea>
                </div>
                <button type='submit' className='w-full bg-blue-600 p-2 rounded-lg hover:bg-blue-400'>Publish Job</button>
            </form>
    </div>
  )
}

export default ApplicationCreate
