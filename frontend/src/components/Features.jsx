export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: "fas fa-star", title: "Kualitas Terjamin", desc: "Bahan berkualitas tinggi dengan resep turun temurun" },
                        { icon: "fas fa-clock", title: "Pelayanan Cepat", desc: "Makanan siap dalam waktu singkat tanpa mengorbankan kualitas" },
                        { icon: "fas fa-heart", title: "Rasa Otentik", desc: "Cita rasa asli Jogja yang tidak akan terlupakan" }
                    ].map((feature, i) => (
                        <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <i className={`${feature.icon} text-white text-2xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}