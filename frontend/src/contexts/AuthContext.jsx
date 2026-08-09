import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from 'react-hot-toast';

const AuthContext = createContext(null);


export function AuthProvider ({children}) {
    const [authUser, setAuthUser] = useState(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [isSigningup, setIsSigningup] = useState(false);
    const [isLogin, setIsLogin] = useState(false);


    const checkAuth = async () =>{
        try {
            const res = await axiosInstance.get("/auth/check");
            setAuthUser(res.data);
        } catch (error) {
            console.log("Error in Auth Check: ", error);
            setAuthUser(null);
        }finally {
            setIsCheckingAuth(false);
        }
    };

    const signup = async (data) => {
        setIsSigningup(true);
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            setAuthUser(res.data);
            toast.success("Account Created Successfully" || "there is an error");
        } catch (error) {
            toast.error(error.response?.data?.message);
            console.log("Error in Auth signup: ", error);
        } finally {
            setIsSigningup(false);
        }
    };

    const login = async (data) => {
        setIsLogin(true);
        try {
            const res = await axiosInstance.post("/auth/login", data);
            setAuthUser(res.data);
            toast.success("Logged In Successfully");
        } catch (error) {
            toast.error(error.response?.data?.message);
            console.log("Error in Auth login: ", error);
        } finally {
            setIsLogin(false);
        }
    };

    const logout = async () => {

        try {
            await axiosInstance.post("/auth/logout");
            setAuthUser(null);
            toast.success("Logged out successfully");
        } catch (error) {
            console.log("Logout error:", error);
            toast.error(error.response?.data?.message);
        }
    };


    return (
        <AuthContext.Provider
         value={{authUser,
            isCheckingAuth,
            isSigningup,
            isLogin,
            checkAuth,
            signup,
            login,
            logout
         }} >
            {children}
         </AuthContext.Provider>
    );
}


export default AuthContext;