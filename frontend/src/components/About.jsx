export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-5xl font-bold text-gray-800 mb-6">Tentang Jogja Culinary</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Berdiri sejak 2010, Jogja Culinary telah menjadi destinasi favorit bagi pecinta makanan tradisional.
                            Kami berkomitmen menghadirkan cita rasa otentik Jogja dengan sentuhan modern.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-check text-orange-600"></i>
                                </div>
                                <span className="text-gray-700 font-medium">Bahan berkualitas premium</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-check text-orange-600"></i>
                                </div>
                                <span className="text-gray-700 font-medium">Resep turun temurun</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                                    <i className="fas fa-check text-orange-600"></i>
                                </div>
                                <span className="text-gray-700 font-medium">Chef berpengalaman</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://yogya.co/wp-content/uploads/tugu-jogja.webp"
                            alt="Chef cooking"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl">
                            <div className="text-3xl font-bold">15+</div>
                            <div className="text-sm">Tahun Pengalaman</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}