import React from 'react'

function login() {
  return (
    <div className='flex w-full min-h-screen text-white'>
        <div className='w-1/2 bg-gradient-to-tr from-blue-500 to-blue-700'>
            <div className='p-14 flex flex-col'>
                <h2 className='font-bold'><span className='bg-white rounded-lg px-2 py-1 text-blue-600'>T</span> TalentBridge</h2>
                <div className='justify-center flex flex-col space-y-4 min-h-[70vh]'>
                    <h1 className='font-bold text-3xl max-w-[13em]'>Where good engineers meet good teams.</h1>
                    <p className='text-gray-300 max-w-[26em]'>TalentBridge keeps hiring simple: publish a role, apply in one click, review applicants.</p>
                </div>
                <p className='flex flex-col justify-end'>© 2026 TalentBridge</p>
            </div>
        </div>
        <div className='w-1/2 flex min-h-screen justify-center'>
            <div className='flex flex-col justify-center px-8 items-center w-full max-w-md'>
                <div>
                    <h1 className='flex text-3xl font-bold text-black justify-center'>Sign In</h1>
                    <p className='text-gray-400'>Welcome back to TalentBridge.</p>
                </div>
                <form action="" className='w-full space-y-5'>
                    <div className='space-y-2'>
                        <label htmlFor="Email" className='text-black block'>Email</label>
                        <input type="email" placeholder='user@gmail.com' className='w-full rounded-lg border px-4 py-2' />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="Password" className='text-black block'>Password</label>
                        <input type= "password" placeholder='********' className='w-full rounded-lg border px-4 py-2' />
                    </div>
                    <button type='submit' className='w-full bg-blue-600 p-2 rounded-lg hover:bg-blue-400'>Login</button>
                    <button className='text-blue-600 bg-gray-100 w-full p-2 rounded-lg'>Create account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login
