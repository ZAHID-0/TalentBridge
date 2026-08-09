import { Toaster } from "react-hot-toast";
import Applications from "./pages/Applications";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <>
      <Signup />
      <Toaster />
    </>
  );
}

export default App
