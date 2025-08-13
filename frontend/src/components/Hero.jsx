import React from "react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1543352634-a1c51b21504e"
                    alt="Jogja Culinary"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-orange-400">Kuliner</span> Jogja
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
                    Menyajikan cita rasa khas Jogja yang otentik dan memikat hati.
                    Dari gudeg manis hingga sate klathak yang legendaris.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
                        <i className="fas fa-utensils mr-2"></i>
                        Jelajahi Menu
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                        <i className="fas fa-play mr-2"></i>
                        Tonton Video
                    </button>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <i className="fas fa-chevron-down text-white text-2xl"></i>
            </div>
        </section>
    );
}