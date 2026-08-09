import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth';

function CandidateSignupForm() {
    const {signup} = useAuth();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        cv: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();

        data.append("fullName", formData.fullName);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("password", formData.password);
        data.append("role", "candidate");

        if (formData.cv) {
            data.append("cv", formData.cv);
    }
        signup(data);
    }


  return (
    <form className='w-full mt-6 space-y-5' onSubmit={handleSubmit}>
        <div className='space-y-2'>
            <label htmlFor="FullName" className='text-black block'>Full Name</label>
            <input type="text"
             placeholder='Your Full Name'
              className='w-full rounded-lg border px-4 py-2'
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName : e.target.value})} />
        </div>
        <div className='space-y-2'>
            <label htmlFor="Email" className='text-black block'>Email</label>
            <input type="email"
             placeholder='user@gmail.com'
             className='w-full rounded-lg border px-4 py-2'
             value={formData.email}
             onChange={(e) => setFormData({...formData, email : e.target.value})} />
        </div>
        <div className='space-y-2'>
            <label htmlFor="Number" className='text-black block'>Phone Number</label>
            <input type="tel"
             placeholder='+212 600000000'
             className='w-full rounded-lg border px-4 py-2'
             value={formData.phone}
             onChange={(e) => setFormData({...formData, phone : e.target.value})}  />
        </div>
        <div className='space-y-2'>
            <label htmlFor="CV" className='text-black block'>Upload CV</label>
            <input type="file"
             className='w-full rounded-lg border px-4 py-2 bg-white'
             onChange={(e) => setFormData({...formData, cv : e.target.files[0]})} />
        </div>
        <div className='space-y-2'>
            <label htmlFor="Password" className='text-black block'>Password</label>
            <input type="password"
             placeholder='At least 6 characters'
             className='w-full rounded-lg border px-4 py-2'
             value={formData.password}
             onChange={(e) => setFormData({...formData, password : e.target.value})} />
        </div>
        <button type='submit' className='text-white w-full bg-blue-600 p-2 rounded-lg hover:bg-blue-400'>Create account</button>
        <button className='text-blue-600 bg-gray-100 w-full p-2 rounded-lg'>Alredy have An Account?</button>
    </form>
  )
}

export default CandidateSignupForm
