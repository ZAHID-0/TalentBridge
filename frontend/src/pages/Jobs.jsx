import React, { useEffect, useState } from 'react'
import BrowsJobs from '../components/BrowsJobs'
import ApplicationMyApplications from '../components/ApplicationMyApplications'
import { useAuth } from '../hooks/useAuth'
import { useJobs } from '../hooks/useJobs'

function Jobs() {
    const {logout} = useAuth();
    const {jobs, getJobs, isJobsLoading} = useJobs();

    const [activePage, setActivePage] = useState("browse");
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("All");
    const [employmentType, setEmploymentType] = useState("All");

    useEffect(() => {
        getJobs();
    }, []);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase());

        const matchesLocation =
            location === "All" || job.location === location;

        const matchesEmployment =
            employmentType === "All" || job.employmentType === employmentType;

        return matchesSearch && matchesLocation && matchesEmployment;
    });

    return (
        <div className='min-h-screen flex'>
            <div className='w-2/12 min-h-screen border border-l-2 border-gray-400 p-6 text-gray-600'>
                <h2 className='font-bold text-gray-800'><span className='bg-blue-600 rounded-lg px-2 py-1 text-white'>T</span> TalentBridge</h2>

                <div className='w-full flex flex-col justify-start mt-4'>
                    <button className={`p-2 w-full rounded-xl text-start ${activePage === "browse" ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => setActivePage("browse")}>Browse Jobs</button>

                    <button className={`p-2 w-full rounded-xl text-start ${activePage === "applications" ? "bg-blue-100 text-blue-700" : ""}`} onClick={() => setActivePage("applications")}>My Applications</button>
                </div>

                <button className='absolute bottom-9' onClick={logout}>Logout</button>
            </div>

            {activePage === "browse" ? (
                <div className='w-full h-screen px-28 py-10 bg-gray-100 overflow-y-auto'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-4xl font-bold'>Browse Jobs</h1>
                            <p className='text-gray-500'>Find your next engineering role.</p>
                        </div>
                    </div>

                    <div className='mt-8 space-y-4 text-gray-700'>
                        <input
                            type="text"
                            placeholder='Search Job or Company...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full border px-4 py-2 bg-white rounded-2xl'
                        />

                        <div className='grid grid-flow-col gap-6'>
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className='w-full rounded-xl border px-4 py-2 bg-white'
                            >
                                <option value="All">All Cities</option>
                                <option value="Marrakech">Marrakech</option>
                                <option value="Casablanca">Casablanca</option>
                                <option value="Rabat">Rabat</option>
                            </select>

                            <select
                                value={employmentType}
                                onChange={(e) => setEmploymentType(e.target.value)}
                                className='w-full rounded-xl border px-4 py-2 bg-white'
                            >
                                <option value="All">All Employment Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Internship">Internship</option>
                            </select>

                            <div />
                        </div>

                        <BrowsJobs jobs={filteredJobs} isJobsLoading={isJobsLoading} />
                    </div>
                </div>
            ) : (
                <ApplicationMyApplications />
            )}
        </div>
    )
}

export default Jobs