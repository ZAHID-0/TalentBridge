import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        minlenght : 6
    },
    role : {
        type : String,
        required : true,
        enum : ["candidate", "recruiter"]
    },
    phone : {
        type : String,
        default : null,
        required : function () {
            return this.role === "candidate"
        }
    },
    company : {
        type : String,
        default : null,
        required : function () {
            return this.role === "recruiter"
        }
    },
    cv : {
        type : String,
        default : null,
    },

 }, {
    timestamps : true
});

const User = mongoose.model("User", userschema);

export default User;