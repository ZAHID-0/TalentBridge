import React, { useEffect } from 'react'
import { useJobs } from '../hooks/useJobs'
import { useApplications } from '../hooks/useApplications';

function BrowsJobs() {

    const {jobs, getJobs, isJobsLoading} = useJobs();
    const { applyToJob, isApplying } = useApplications();

    useEffect(() => {
        getJobs()
    }, []);

    const handleApply = async (jobId) => {
        await applyToJob(jobId);
    };

    if (isJobsLoading) {
        return <div>Loading jobs...</div>;
    }



  return (
    <div className='grid grid-cols-2 gap-6'>

        {jobs.map((job) => (
            <div className='bg-white rounded-xl px-5 py-5 space-y-2 relative border-2' key={job._id}>
            <h1 className='text-black font-bold'>{job.title}</h1>
            <p>Cpmpany Name</p>
            <div className='flex gap-2'> 
                <p>{job.location}</p>
                <p>{job.employmentType}</p>
            </div>
            <p>{job.description}</p>
            <div className="flex justify-end pt-4">
                <button className="px-3 py-1 rounded-lg bg-blue-600 text-white"
                 onClick={() => handleApply(job._id)}
                 disabled={isApplying}>
                    {isApplying ? "Applying..." : "Apply Now"}
                </button>
            </div>
        </div>
      ))}
      
    </div>
  );
}

export default BrowsJobs
