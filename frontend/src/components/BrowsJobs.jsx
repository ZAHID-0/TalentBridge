import React, { useEffect, useState } from 'react'
import { useJobs } from '../hooks/useJobs'
import { useApplications } from '../hooks/useApplications';

function BrowsJobs({jobs, isJobsLoading}) {
    const {applyToJob} = useApplications();
    const [applyingJobId, setApplyingJobId] = useState(null);

    const handleApply = async (jobId) => {
        setApplyingJobId(jobId);
        await applyToJob(jobId);
        setApplyingJobId(null);
    };

    if (isJobsLoading) {
        return <div>Loading jobs...</div>;
    }

    return (
        <div className='grid grid-cols-2 gap-6'>
            {jobs.map((job) => (
                <div className='bg-white rounded-xl px-5 py-5 border-2 h-[320px] flex flex-col' key={job._id}>
                    <h1 className='text-black font-bold'>{job.title}</h1>
                    <p>{job.company}</p>

                    <div className='flex gap-2'>
                        <p>{job.location}</p>
                        <p>{job.employmentType}</p>
                    </div>

                    <div className='mt-2 overflow-y-auto flex-1'>
                        <p>{job.description}</p>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            className="px-3 py-1 rounded-lg bg-blue-600 text-white"
                            onClick={() => handleApply(job._id)}
                            disabled={applyingJobId === job._id}
                        >
                            {applyingJobId === job._id ? "Applying..." : "Apply Now"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BrowsJobs