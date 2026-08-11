import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Applications from "./pages/Applications";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";

function App() {
  const {authUser, checkAuth, isCheckingAuth} = useAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={!authUser ? <Navigate to="/login" /> : authUser.role === "recruiter" ? <Applications /> : <Jobs />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/applications" element={authUser?.role === "recruiter" ? <Applications /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App
