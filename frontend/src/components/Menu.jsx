export default function Menu() {
    return (
        <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">Menu Andalan</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Nikmati kelezatan kuliner Jogja yang telah menjadi favorit ribuan pelanggan
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Gudeg Jogja",
                            img: "https://images.unsplash.com/photo-1617196035816-a27b655b13e6",
                            desc: "Gudeg khas Jogja dengan nangka muda yang lembut dan bumbu yang meresap sempurna",
                            price: "Rp 25.000"
                        },
                        {
                            name: "Sate Klathak",
                            img: "https://images.unsplash.com/photo-1604152135912-04a022e23696",
                            desc: "Sate daging kambing dengan bumbu khas yang dibakar dengan arang kelapa",
                            price: "Rp 35.000"
                        },
                        {
                            name: "Bakpia Pathok",
                            img: "https://images.unsplash.com/photo-1626011538333-6c27f68eac0c",
                            desc: "Kue tradisional dengan isian kacang hijau yang lembut dan manis",
                            price: "Rp 15.000"
                        }
                    ].map((menu, i) => (
                        <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="relative overflow-hidden">
                                <img src={menu.img} alt={menu.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    {menu.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{menu.name}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{menu.desc}</p>
                                <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                                    <i className="fas fa-shopping-cart mr-2"></i>
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}