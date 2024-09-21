import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landingpage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import UserDashboard from "./pages/UserDashboard";

// main app
function App() {
  return (
    // this div contains the whole app
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
