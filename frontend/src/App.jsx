import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
    return (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">

            <Navbar />
            <Hero />
            <Features />
            <Menu />




            {/* Testimonial Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-4">Testimoni Pelanggan</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Dengarkan apa kata pelanggan setia kami tentang pengalaman kuliner mereka
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { 
                                name: "Rani Sari", 
                                role: "Food Blogger",
                                text: "Rasanya autentik! Berasa makan di rumah nenek di Jogja. Pelayanannya juga sangat ramah dan profesional.",
                                rating: 5
                            },
                            { 
                                name: "Budi Santoso", 
                                role: "Pengusaha",
                                text: "Sate klathaknya mantap! Daging empuk, bumbu pas. Sudah jadi tempat favorit untuk meeting bisnis.",
                                rating: 5
                            },
                            { 
                                name: "Sari Dewi", 
                                role: "Fotografer",
                                text: "Tempatnya estetik banget buat foto-foto, makanannya juara. Perfect untuk konten sosial media!",
                                rating: 5
                            }
                        ].map((testi, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    {[...Array(testi.rating)].map((_, i) => (
                                        <i key={i} className="fas fa-star text-yellow-400 mr-1"></i>
                                    ))}
                                </div>
                                <p className="text-gray-300 mb-6 leading-relaxed">"{testi.text}"</p>
                                <div>
                                    <h4 className="font-bold text-lg">{testi.name}</h4>
                                    <p className="text-orange-400 text-sm">{testi.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-5xl font-bold mb-6">Siap Menikmati Kelezatan Jogja?</h2>
                    <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                        Reservasi sekarang untuk pengalaman kuliner yang tak terlupakan. 
                        Kami siap melayani Anda dengan sepenuh hati.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold text-lg shadow-lg">
                            <i className="fas fa-utensils mr-2"></i>
                            Pesan Meja
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                            <i className="fas fa-phone mr-2"></i>
                            Hubungi Kami
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center space-x-2 mb-6">
                                <i className="fas fa-utensils text-3xl text-orange-600"></i>
                                <span className="text-2xl font-bold">Jogja Culinary</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                                Menyajikan cita rasa khas Jogja yang otentik dan memikat hati. 
                                Dari gudeg manis hingga sate klathak yang legendaris.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                                    <i className="fab fa-instagram text-xl"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                                    <i className="fab fa-facebook text-xl"></i>
                                </a>
                                <a href="#" className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors">
                                    <i className="fab fa-twitter text-xl"></i>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Kontak</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-map-marker-alt text-orange-600"></i>
                                    <span className="text-gray-400">Jalan Malioboro No. 123, Yogyakarta</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-phone text-orange-600"></i>
                                    <span className="text-gray-400">+62 274 123456</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <i className="fas fa-envelope text-orange-600"></i>
                                    <span className="text-gray-400">info@kulinerjogja.com</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Jam Buka</h3>
                            <div className="space-y-2 text-gray-400">
                                <div>Senin - Jumat: 10:00 - 22:00</div>
                                <div>Sabtu - Minggu: 09:00 - 23:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Jogja Culinary. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
