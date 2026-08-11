import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

function login() {

    const { login, isLogin } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(formData);
    };

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
                <form  onSubmit={handleSubmit} className='w-full space-y-5'>
                    <div className='space-y-2'>
                        <label htmlFor="Email" className='text-black block'>Email</label>
                        <input  type="email"
                                placeholder="user@gmail.com"
                                className="w-full rounded-lg border px-4 py-2 text-black"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value
                                    })
                                }
                            />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="Password" className='text-black block'>Password</label>
                        <input type="password"
                                placeholder="********"
                                className="w-full rounded-lg border px-4 py-2 text-black"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value
                                    })
                                }
                            />
                    </div>
                    <button type="submit"
                            disabled={isLogin}
                            className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-400 disabled:opacity-50">
                            {isLogin ? "Logging in..." : "Login"}
                    </button>
                    <Link to={"/signup"} ><button className='text-blue-600 bg-gray-100 w-full p-2 rounded-lg'>Create account</button></Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default login
