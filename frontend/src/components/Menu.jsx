import { useEffect, useState } from "react";

export default function Menu() {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/menu")
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                setMenus(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetch menu:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Memuat menu...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="menu" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p className="text-red-600">Error: {error}</p>
                        <p className="text-gray-600 mt-2">Pastikan server backend berjalan di http://localhost:5000</p>
                    </div>
                </div>
            </section>
        );
    }

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
                    {menus.map((menu) => (
                        <div
                            key={menu.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={menu.foto_url}
                                    alt={menu.nama_menu}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x300?text=Menu+Image';
                                    }}
                                />
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Rp {menu.harga}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">{menu.nama_menu}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{menu.deskripsi}</p>
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
