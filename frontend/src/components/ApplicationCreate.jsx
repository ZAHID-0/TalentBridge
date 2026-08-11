import React, { useState } from 'react';
import { useJobs } from '../hooks/useJobs';

function ApplicationCreate() {
    const { createJob, isCreatingJob } = useJobs();

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        employmentType: "Full Time",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const createdJob = await createJob(formData);

        if (createdJob) {
            setFormData({
                title: "",
                location: "",
                employmentType: "Full Time",
                description: ""
            });
        }
    };

    return (
        <div className='w-full h-screen p-10 bg-gray-100 overflow-y-auto'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-4xl font-bold'>Create job</h1>
                    <p className='text-gray-500'>Publish a new opening.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className='w-full max-w-3xl mx-auto space-y-5 px-10 py-10 rounded-3xl mt-10 bg-white'>
                <div className='space-y-2'>
                    <label htmlFor='title' className='text-black block'>Job Title</label>
                    <input id='title' name='title' type='text'
                     placeholder='Backend Engineer'
                     value={formData.title}
                     onChange={handleChange}
                     className='w-full rounded-lg border px-4 py-2' />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='location' className='text-black block'>Location</label>
                    <input id='location'
                     name='location'
                     type='text'
                     placeholder='ex: Morocco'
                     value={formData.location} 
                     onChange={handleChange} 
                     className='w-full rounded-lg border px-4 py-2' />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='employmentType' className='text-black block'>Employment Type</label>
                    <select id='employmentType' name='employmentType' value={formData.employmentType} onChange={handleChange} className='w-full rounded-lg border px-4 py-2 bg-white'>
                        <option value='Full Time'>Full Time</option>
                        <option value='Part Time'>Part Time</option>
                        <option value='Hybrid'>Hybrid</option>
                        <option value='Remote'>Remote</option>
                        <option value='Internship'>Internship</option>
                    </select>
                </div>

                <div className='space-y-2'>
                    <label htmlFor='description' className='text-black block'>Description</label>
                    <textarea id='description' name='description' value={formData.description} onChange={handleChange} placeholder='Describe the position...' className='w-full rounded-lg border px-4 py-2' rows={5}></textarea>
                </div>

                <button type='submit' disabled={isCreatingJob} className='w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-400 disabled:opacity-50'>
                    {isCreatingJob ? 'Publishing...' : 'Publish Job'}
                </button>
            </form>
        </div>
    );
}

export default ApplicationCreate;