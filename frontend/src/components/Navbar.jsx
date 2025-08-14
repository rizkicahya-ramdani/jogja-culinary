import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <i className="fas fa-utensils text-2xl text-orange-600"></i>
                        <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Jogja Culinary</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'}`}>Beranda</a>
                        <a href="#menu" className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'}`}>Menu</a>
                        <a href="#about" className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'}`}>Tentang</a>
                        <a href="#contact" className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'}`}>Kontak</a>
                    </div>
                    <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors font-medium">
                        Pesan Sekarang
                    </button>
                </div>
            </div>
        </nav>
    );
}