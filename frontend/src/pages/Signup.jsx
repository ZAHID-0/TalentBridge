import React from 'react'
import CandidateSignupForm from '../components/CandidateSignupForm';
import RecruiterSignupForm from '../components/RecruiterSignupForm';

function Signup() {
  return (
     <div className='flex w-full min-h-screen text-white'>
        <div className='w-1/2 bg-gradient-to-tr from-blue-500 to-blue-700 p-14'>
            <div className=' flex flex-col justify-between'>
                <h2 className='font-bold'><span className='bg-white rounded-lg px-2 py-1 text-blue-600'>T</span> TalentBridge</h2>
                <div className='justify-center flex flex-col space-y-4 min-h-[70vh]'>
                    <h1 className='font-bold text-3xl max-w-[13em]'>Where good engineers meet good teams.</h1>
                    <p className='text-gray-300 max-w-[26em]'>TalentBridge keeps hiring simple: publish a role, apply in one click, review applicants.</p>
                </div>
                <p className='flex flex-col absolute bottom-0 left-14'>© 2026 TalentBridge</p>
            </div>
        </div>
        <div className='w-1/2 flex min-h-screen justify-center text-black py-14'>
            <div className='flex flex-col justify-center px-8 items-center w-full max-w-md'>
                <div>
                    <h1 className='flex text-3xl font-bold text-black justify-center'>Create Account</h1>
                    <p className='text-gray-400'>Choose your role to get started.</p>
                </div>
                <div>
                    <p>I am a</p>
                    <div className='grid grid-flow-col space-x-3'>
                        <button className='grid-cols-1 border-gray-200 py-4 px-3 border rounded-xl'>
                            <h3 className='font-bold'>Candidate</h3>
                            <p className='text-sm text-gray-500'>Apply to jobs with your CV</p>
                        </button>
                        <button className='grid-cols-1 border-gray-200 py-4 px-3 border rounded-xl'>
                            <h3 className='font-bold'>Recruiter</h3>
                            <p className='text-sm text-gray-500'>Publish Jobs and review applicants</p>
                        </button>
                    </div>
                </div>
                <RecruiterSignupForm />
            </div>
        </div>
    </div>
  );
}

export default Signup
