export default function Cta() {
    return (
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
    );
}