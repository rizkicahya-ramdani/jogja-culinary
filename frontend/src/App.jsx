import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./admin/Login.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Reservation from "./components/Reservation.jsx";

const HomePage = () => {
    return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Menu />
            <About />
            <Testimonial />
            <Cta />
            <Footer />
        </div>
    );
};

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/admin" replace />;
    }
    return children;
};

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin" element={<Login />} />
                <Route path="/reservasi" element={<Reservation />} />
                <Route
                    path="/admin/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
