import bcrypt from 'bcryptjs';

import User from "../models/User.js";
import { generateToken } from '../utils/generateTokens.js';
import cloudinary from '../lib/cloudinary.js';

export const signup = async (req, res) => {
    const {fullName, email, password, role, phone, company } = req.body;
    const cv = req.file;


    try {
        if(!["recruiter","candidate"].includes(role)){
            return res.status(400).json({message : "Role Isn't Valide"});
        }
        if(role==="recruiter" && (!fullName || !email || !password || !role || !company) ) {
            return res.status(400).json({message : 'all fields are required'});
        }
        if(role==="candidate" && (!fullName || !email || !password || !role || !phone) ) {
            return res.status(400).json({message : 'all fields are required'});
        }
        if(password.length < 6) {
            return res.status(400).json({message: 'Password must be at least 6 characteres'});
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: 'Invalide Email format'});
        }

        const user = await User.findOne({email})
        if(user) return res.status(400).json({message : "Email Alredy Exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        let cvUrl=null;
        if (role === "candidate" && cv) {
            const uploadResponse = await cloudinary.uploader.upload(
                cv.path,
                {
                    folder: "TalentBridge/CVs",
                    resource_type: "image"
                }
            );

            cvUrl = uploadResponse.secure_url;
        }

        const newUser = new User({
            fullName,
            email,
            password : hashedPassword,
            role,
            phone,
            company,
            cv : cvUrl
        });

        if(newUser) {
            await newUser.save();
            generateToken(newUser._id, res);
            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                email : newUser.email,
                role : newUser.role,
                phone : newUser.phone,
                company : newUser.company,
                cv : newUser.cv
            });
        } else {
            res.status(400).json({message : 'invalide User Data'});
        }
    } catch (error) {
        console.log("Error in signUp: ",error);
        res.status(500).json({message : 'internal Server Error'});
    }
};


export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        if(!email || !password) res.status(400).json({message : "All fields are Required"});

        const user = await User.findOne({email});

        if(!user) res.status(200).json({message : "Invalide Data"});

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) res.status(400).json({message : "Invalide Data"});

        generateToken(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            email : user.email,
            role : user.role,
            phone : user.phone,
            company : user.company,
            cv : user.cv
        });

    } catch (error) {
        console.log("Error in signUp: ",error);
        res.status(500).json({message : 'internal Server Error'});
    }
};


export const logout = async (_, res) => {
    res.cookie("jwt", "", {maxAge : 0});
    res.status(200).json({message : "Loged out Successfully"});
};