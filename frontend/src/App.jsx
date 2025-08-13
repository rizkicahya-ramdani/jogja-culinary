import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
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

export default App;
