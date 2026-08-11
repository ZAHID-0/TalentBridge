import { createContext, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";


const ApplicationContext = createContext(null);

export function ApplicationProvider({children}) {
    const [applications, setApplications] = useState([]);
    const [isApplicationsLoading, setIsApplicationsLoading] = useState(false);
    const [isApplying, setIsApplying] = useState(false);
    const [isMyApplicationsLoading, setIsMyApplicationsLoading] = useState(false);
    const [myApplications, setMyApplications] = useState([]);

    const applyToJob = async (jobId) => {
        setIsApplying(true);
        try {
            const res = await axiosInstance.post(`/applications/apply/${jobId}`);
            setApplications((prevApplications) => [
                res.data,
                ...prevApplications
            ]);
            toast.success("Application submitted successfully");
            return res.data;
        } catch (error) {
            toast.error(error.response?.data?.message );
        } finally {
            setIsApplying(false);
        }
    };

    const getApplications = async () => {
        setIsApplicationsLoading(true);
        try {
            const res = await axiosInstance.get("/applications");
            setApplications(res.data);
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsApplicationsLoading(false);
        }
    };

    const getMyApplications = async () => {
        setIsMyApplicationsLoading(true);
        try {
            const res = await axiosInstance.get("/applications/my");
            setMyApplications(res.data);
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setIsMyApplicationsLoading(false);
        }
    };

    return (
        <ApplicationContext.Provider
            value={{
                applications,
                myApplications,

                isApplicationsLoading,
                isApplying,
                isMyApplicationsLoading,

                applyToJob,
                getApplications,
                getMyApplications
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationContext;