import { BrowserRouter as Router,Route } from "react-router-dom";
import { Routes } from "react-router"
import Login from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
const FrRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
};

export default FrRoutes;