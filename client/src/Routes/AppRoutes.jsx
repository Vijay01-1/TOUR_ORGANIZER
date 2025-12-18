import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/Dashboard";
import CreateTrip from "../pages/CreateTrip";
import TripDetails from "../pages/TripDetails";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/trip/:id" element={<TripDetails />} />
    </Routes>
    )
};

export default AppRoutes;