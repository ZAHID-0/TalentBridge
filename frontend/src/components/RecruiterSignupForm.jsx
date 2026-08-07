import React from 'react'

function RecruiterSignupForm() {
  return (
    <form action="" className='w-full mt-6 space-y-5'>
        <div className='space-y-2'>
            <label htmlFor="CompanyName" className='text-black block'>Company Name</label>
            <input type="text" placeholder='Company' className='w-full rounded-lg border px-4 py-2' />
        </div>
        <div className='space-y-2'>
            <label htmlFor="FullName" className='text-black block'>Recruiter Name</label>
            <input type="text" placeholder='Your Full Name' className='w-full rounded-lg border px-4 py-2' />
        </div>
        <div className='space-y-2'>
            <label htmlFor="Email" className='text-black block'>Email</label>
            <input type="email" placeholder='user@gmail.com' className='w-full rounded-lg border px-4 py-2' />
        </div>
        <div className='space-y-2'>
            <label htmlFor="Password" className='text-black block'>Password</label>
            <input type="password" placeholder='At least 6 characters' className='w-full rounded-lg border px-4 py-2' />
        </div>
        <button type='submit' className='text-white w-full bg-blue-600 p-2 rounded-lg hover:bg-blue-400'>Create account</button>
        <button className='text-blue-600 bg-gray-100 w-full p-2 rounded-lg'>Alredy have An Account?</button>
    </form>
  )
}

export default RecruiterSignupForm
