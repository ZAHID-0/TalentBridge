import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    recruiterId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    title : {
        type : String,
        required : true,
    },
    location : {
        type : String,
        required : true,
    },
    employmentType : {
        type : String,
        enum : ["Internship","Full Time","Part Time","Remote","Hybrid"],
        required : true
    },
    description : {
        type : String,
        required : true
    }
 },{
    timestamps : true
   }
);

const Job = mongoose.model("Job", jobSchema);

export default Job;