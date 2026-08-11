import { createContext, useContext, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


const JobContext = createContext(null);

export function JobProvider({children}){
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isJobsLoading, setIsJobsLoading] = useState(false);
    const [isJobLoading, setIsJobLoading] = useState(false);
    const [isCreatingJob, setIsCreatingJob] = useState(false);
    const [isDeletingJob, setIsDeletingJob] = useState(false);

    const getJobs = async () => {
        setIsJobsLoading(true);
        try {
            const res = await axiosInstance.get("/jobs/get");
            setJobs(res.data);
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsJobsLoading(false);
        }
    };

    const getJobById = async (jobId) => {
        setIsJobLoading(true);
        try {
            const res = await axiosInstance.get(`/jobs/get/${jobId}`);
            setSelectedJob(res.data);
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsJobLoading(false);
        }
    };

    const createJob = async (jobData) => {
        setIsCreatingJob(true);
        try {
            const res = await axiosInstance.post('/jobs/create', jobData);
             setJobs((prevJobs) => [
                res.data,
                ...prevJobs
            ]);
            toast.success("Job created successfully");
            return res.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsCreatingJob(false);
        }
    };

    const deleteJob = async (jobId) => {
        setIsDeletingJob(true);
        try {
            await axiosInstance.delete(`/jobs/delete/${jobId}`);
            setJobs((prevJobs) =>
                prevJobs.filter((job) => job._id !== jobId)
            );
            toast.success("Job deleted successfully");
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsDeletingJob(false);
        }
    };
    
    const clearSelectedJob = () => {
        setSelectedJob(null);
    };

    return (
        <JobContext.Provider
            value={{
                jobs,
                selectedJob,

                isJobsLoading,
                isJobLoading,
                isCreatingJob,
                isDeletingJob,

                getJobs,
                getJobById,
                createJob,
                deleteJob,
                clearSelectedJob
            }}
        >
            {children}
        </JobContext.Provider>    
    );
}

export default JobContext;