export default function Testimonial() {
    return (
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
    );
}