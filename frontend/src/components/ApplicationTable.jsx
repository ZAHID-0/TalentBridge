import React, { useEffect, useState } from "react";
import { useApplications } from "../hooks/useApplications";
import { useJobs } from "../hooks/useJobs";

function ApplicationTable() {

    const {
        applications,
        getApplications,
        isApplicationsLoading
    } = useApplications();

    const { deleteJob, jobs, getJobs } = useJobs();

    const [selectedCV, setSelectedCV] = useState(null);


    useEffect(() => {
      getJobs();
      getApplications();
    }, []);


    const groupedApplications = jobs.map((job) => ({
      job,
      applicants: applications
          .filter((application) => application.jobId?._id === job._id)
          .map((application) => application.candidateId)
    }));


    if (isApplicationsLoading) {
        return (
            <div className="w-full mt-5">
                Loading applications...
            </div>
        );
    }


    return (
        <div className="w-full mt-5 space-y-6">

            {groupedApplications.map(({ job, applicants }) => (

                <div
                    key={job._id}
                    className="w-full border border-gray-200 rounded-2xl overflow-hidden"
                >

                    <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b">

                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                {job.title}
                            </h2>

                            <p className="text-sm text-gray-500 mt-1">
                                {job.location} • {job.employmentType}
                            </p>
                        </div>


                        <button onClick={async () => {await deleteJob(job._id);
                                                      await getApplications();
                        }}
                                className="text-red-500 hover:text-red-700"
                        >
                            Delete Job
                        </button>

                    </div>


                    <div className="p-5">

                        <h3 className="font-medium text-gray-700 mb-4">
                            Applicants ({applicants.length})
                        </h3>


                        {applicants.length === 0 ? (

                            <p className="text-gray-400">
                                No applicants yet.
                            </p>

                        ) : (

                            <table className="w-full">

                                <thead>
                                    <tr className="text-left text-gray-400 border-b">
                                        <th className="pb-3">
                                            Full Name
                                        </th>

                                        <th className="pb-3">
                                            Email
                                        </th>

                                        <th className="pb-3">
                                            CV
                                        </th>
                                    </tr>
                                </thead>


                                <tbody>

                                    {applicants.map((applicant) => (

                                        <tr
                                            key={applicant._id}
                                            className="border-b last:border-0"
                                        >

                                            <td className="py-4">
                                                {applicant.fullName}
                                            </td>


                                            <td className="py-4 text-gray-600">
                                                {applicant.email}
                                            </td>


                                            <td className="py-4">

                                                {applicant.cv ? (

                                                    <button
                                                        onClick={() => setSelectedCV(applicant.cv)}
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        View CV
                                                    </button>

                                                ) : (

                                                    <span className="text-gray-400">
                                                        No CV
                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        )}

                    </div>

                </div>

            ))}
          {selectedCV && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

              <div className="bg-white w-[30%] h-[90%] rounded-xl shadow-xl overflow-hidden">

                  <div className="flex items-center justify-between px-5 py-3 border-b">

                      <h2 className="font-semibold text-gray-800">Candidate CV</h2>

                      <button
                          onClick={() => setSelectedCV(null)}
                          className="text-gray-500 hover:text-red-500 text-xl"
                      >
                          ✕
                      </button>

                  </div>

                  <iframe
                      src={selectedCV}
                      className="w-full h-[calc(100%-57px)]"
                      title="Candidate CV"
                  />

              </div>

          </div>
         )}
        </div>
    );
}

export default ApplicationTable;