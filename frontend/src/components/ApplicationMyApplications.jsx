import React, { useEffect } from "react";
import { useApplications } from "../hooks/useApplications";

function ApplicationMyApplications() {
    const { myApplications, getMyApplications, isMyApplicationsLoading } = useApplications();

    useEffect(() => {
        getMyApplications();
    }, []);

    if (isMyApplicationsLoading) {
        return <div className="w-full p-10">Loading applications...</div>;
    }

    return (
        <div className="w-full min-h-screen px-28 py-10 bg-gray-100 overflow-y-auto">
            <div>
                <h1 className="text-4xl font-bold">My Applications</h1>
                <p className="text-gray-500 mt-2">{myApplications.length} applications submitted</p>
            </div>

            <div className="mt-10 bg-white rounded-2xl border overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="text-left text-gray-500 border-b">
                            <th className="px-5 py-4">Job Title</th>
                            <th className="px-5 py-4">Company</th>
                            <th className="px-5 py-4">Applied Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myApplications.map((application) => (
                            <tr key={application._id} className="border-b last:border-0">
                                <td className="px-5 py-4">{application.jobId?.title}</td>
                                <td className="px-5 py-4 text-gray-500">{application.jobId?.company}</td>
                                <td className="px-5 py-4 text-gray-500">
                                    {new Date(application.createdAt).toLocaleDateString("en-GB", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric"
                                    })}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {myApplications.length === 0 && (
                    <p className="p-6 text-gray-400">You haven't applied to any jobs yet.</p>
                )}
            </div>
        </div>
    );
}

export default ApplicationMyApplications;