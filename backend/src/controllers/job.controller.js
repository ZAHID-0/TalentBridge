import Job from "../models/Job.js";


export const createJob = async (req, res) => {
    try {
        if(req.user.role !== "recruiter") return res.status(403).json({message : "Role Not Valide"});

        const {title, location, employmentType, description} = req.body;
        if(!title || !location || !employmentType || !description) return res.status(400).json({message : "All Fields are required"});

        const newJob = new Job({
            recruiterId : req.user._id,
            title,
            location,
            employmentType,
            description
        });
        await newJob.save();

        res.status(201).json({
            _id : newJob._id,
            title : newJob.title,
            location : newJob.location,
            employmentType : newJob.employmentType,
            description : newJob.description
        });
    } catch (error) {
        console.error("Error in create Job",error);
        res.status(500).json({message : "Internal Server Error"})
    }
};


export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().sort({createdAt : -1});
        res.status(200).json(jobs)
    } catch (error) {
        console.error("Error in getJobs:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const getJobById = async (req, res) => {
    const jobId = req.params.id;

    try {
        const job = await Job.findById(jobId);
        if(!job) return res.status(404).json({message : "Job Id Not found"});

        res.status(200).json(job);
    } catch (error) {
        console.error("Error in getJobById:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }

};


export const deleteJob = async (req, res) => {
    const jobid = req.params.id;

    try {
        if(req.user.role !== "recruiter") return res.status(403).json({message : "Only Recruiter can delete jobs"});

        const job = await Job.findById(jobid);
        if(!job) return res.status(404).json({message : "Job Id Not found"});

        if(job.recruiterId.toString() !== req.user._id.toString() ) return res.status(403).json({message : "Not Authorized to delete this job"});

        await job.deleteOne();

        return res.status(200).json({message : "Job Deleted Successfully"});
    } catch (error) {
        console.error("Error in delete Job:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};