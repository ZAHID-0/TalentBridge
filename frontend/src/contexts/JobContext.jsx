import { useContext, useState } from "react";
import { axiosInstance } from "../lib/axios";


const JobConstext = useContext(null);

export function JobProvider({children}){
    const [jobs, setJobs] = useState(null);
    const [selectedJob, setSelectedJob] = useState(null);
    const [isJobsLoading, setIsJobsLoading] = useState(false);
    const [isJobLoading, setIsJobLoading] = useState(false);
    const [isCreatingJob, setIsCreatingJob] = useState(false);
    const [isDeletingJob, setIsDeletingJob] = useState(false);

    const getAllJobs = async () => {
        setIsJobsLoading(true);
        try {
            const res = axiosInstance.get("/jobs/get");
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
            const res = axiosInstance.get(`/jobs/get/${jobId}`);
            setSelectedJob(res.data);
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsJobLoading(false);
        }
    };

    
}