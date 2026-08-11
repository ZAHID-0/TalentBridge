import Application from "../models/Application.js";
import Job from "../models/Job.js";



export const applyToJob = async (req, res) => {
    try {
        if(req.user.role !== "candidate") return res.status(403).json({message : "Only candidate can apply to jobs"});

        const jobid = req.params.id;

        const job = await Job.findById(jobid);
        if(!job) return res.status(404).json({message : "Job Not Found"});

        const application = await Application.findOne({candidateId:req.user._id,jobId:job._id});
        if(application) return res.status(400).json({message : "Application alredy exists"});

        const newApplication = new Application({
            candidateId : req.user._id,
            jobId : job._id
        });

        await newApplication.save();

        res.status(201).json({
            candidateId : newApplication.candidateId,
            jobId : newApplication.jobId
        });
    } catch (error) {
        console.log("Error in apply Job"+error);
        res.status(500).json({message : 'internal Server Error'});
    }
};


export const getApplications = async (req, res) => {
    try {
        if(req.user.role !== "recruiter") return res.status(403).json({message : "Only recruiters can see the applications"});

        const jobs = await Job.find({recruiterId : req.user._id});
        const jobsIds = jobs.map(job => job._id);
        const applications = await Application.find({
            jobId : {$in : jobsIds}
        }).populate("candidateId","fullName email cv").populate("jobId","title location employmentType");

        res.status(200).json(applications);
    } catch (error) {
        console.log("Error in Get Applications"+error);
        res.status(500).json({message : 'internal Server Error'});
    }
};