export default function Footer() {
    return (
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
    );
}