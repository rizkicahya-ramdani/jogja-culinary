import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [form, setForm] = useState({ nama_menu: "", deskripsi: "", harga: "", foto_url: "" });
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/admin", { replace: true });
            return;
        }
        const fetchMe = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/admin/me", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data?.error || "Unauthorized");
                }
                setUser(data.user);
            } catch (err) {
                setError(err.message || "Gagal memuat");
            } finally {
                setLoading(false);
            }
        };
        fetchMe();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/admin", { replace: true });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccessMsg("");
        setSubmitting(true);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:5000/api/menu", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    nama_menu: form.nama_menu.trim(),
                    deskripsi: form.deskripsi.trim() || null,
                    harga: parseFloat(form.harga),
                    foto_url: form.foto_url.trim() || null,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || "Gagal menyimpan menu");
            }
            setSuccessMsg("Menu berhasil ditambahkan");
            setForm({ nama_menu: "", deskripsi: "", harga: "", foto_url: "" });
        } catch (err) {
            setError(err.message || "Terjadi kesalahan");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">Memuat...</div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
                <p className="text-red-600">{error}</p>
                <button onClick={() => navigate("/admin", { replace: true })} className="px-4 py-2 bg-amber-500 text-white rounded">Kembali ke Login</button>
            </div>
        );
    }

    return (
        <div className="min-h-screen p-6 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors">Logout</button>
                </div>
                <div className="bg-white shadow rounded border border-gray-200">
                    <div className="px-6 py-4 border-b border-gray-200 bg-amber-50">
                        <p className="text-sm text-gray-700">Selamat datang, <span className="font-medium text-gray-900">{user?.username}</span>.</p>
                        <h2 className="text-lg font-semibold text-gray-900 mt-2">Tambah Menu</h2>
                    </div>
                    <div className="p-6">
                        {error && (
                            <div className="mb-4 text-sm px-3 py-2 rounded border border-red-200 bg-red-50 text-red-700">{error}</div>
                        )}
                        {successMsg && (
                            <div className="mb-4 text-sm px-3 py-2 rounded border border-green-200 bg-green-50 text-green-700">{successMsg}</div>
                        )}
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nama_menu">Nama Menu</label>
                                <input id="nama_menu" name="nama_menu" type="text" required value={form.nama_menu} onChange={handleChange} className="w-full text-gray-700 border border-gray-300 bg-white rounded px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Contoh: Gudeg Jogja" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="deskripsi">Deskripsi</label>
                                <textarea id="deskripsi" name="deskripsi" value={form.deskripsi} onChange={handleChange} className="w-full border text-gray-700 border-gray-300 bg-white rounded px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" rows={3} placeholder="Deskripsi singkat" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="harga">Harga (Rp)</label>
                                <input id="harga" name="harga" type="number" step="0.01" required value={form.harga} onChange={handleChange} className="w-full border text-gray-700 border-gray-300 bg-white rounded px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="25000" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="foto_url">URL Foto</label>
                                <input id="foto_url" name="foto_url" type="url" value={form.foto_url} onChange={handleChange} className="w-full border text-gray-700 border-gray-300 bg-white rounded px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="https://..." />
                            </div>
                            <div className="flex gap-2">
                                <button type="submit" disabled={submitting} className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors disabled:opacity-60">
                                    {submitting ? "Menyimpan..." : "Simpan Menu"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


