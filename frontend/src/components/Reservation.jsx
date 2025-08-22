import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Reservation() {
    const navigate = useNavigate();
    const location = useLocation();
    const [form, setForm] = useState({
        nama: "",
        email: "",
        no_hp: "",
        tanggal_reservasi: "",
        jumlah_orang: "",
        catatan: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setSubmitting(true);
        try {
            const res = await fetch("http://localhost:5000/api/reservasi", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nama: form.nama.trim(),
                    email: form.email.trim(),
                    no_hp: form.no_hp.trim(),
                    tanggal_reservasi: form.tanggal_reservasi,
                    jumlah_orang: parseInt(form.jumlah_orang),
                    catatan: form.catatan.trim() || null,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || "Gagal mengirim reservasi");
            }
            setSuccess("Reservasi berhasil dikirim. Kami akan menghubungi Anda.");
            setForm({ nama: "", email: "", no_hp: "", tanggal_reservasi: "", jumlah_orang: "", catatan: "" });
        } catch (err) {
            setError(err.message || "Gagal mengirim reservasi");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="container mx-auto px-6 py-10">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Reservasi</h1>
                    <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded transition-colors">Kembali</button>
                </div>
                <div className="bg-white border border-gray-200 shadow-md rounded">
                    <div className="px-6 py-4 border-b border-gray-200 bg-amber-500">
                        <p className="text-sm">Lengkapi formulir di bawah ini untuk melakukan reservasi.</p>
                    </div>
                    <div className="p-6">
                        {error && (
                            <div className="mb-4 text-sm px-3 py-2 rounded border border-red-200 bg-red-50 text-red-700">{error}</div>
                        )}
                        {success && (
                            <div className="mb-4 text-sm px-3 py-2 rounded border border-green-200 bg-green-50 text-green-700">{success}</div>
                        )}
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 max-w-2xl">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nama">Nama</label>
                                <input id="nama" name="nama" type="text" required value={form.nama} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="Nama lengkap" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="email@contoh.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="no_hp">No HP</label>
                                <input id="no_hp" name="no_hp" type="tel" required value={form.no_hp} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="08xxxxxxxxxx" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="tanggal_reservasi">Tanggal Reservasi</label>
                                    <input id="tanggal_reservasi" name="tanggal_reservasi" type="date" required value={form.tanggal_reservasi} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="jumlah_orang">Jumlah Orang</label>
                                    <input id="jumlah_orang" name="jumlah_orang" type="number" min="1" required value={form.jumlah_orang} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" placeholder="2" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="catatan">Catatan</label>
                                <textarea id="catatan" name="catatan" value={form.catatan} onChange={handleChange} className="w-full border border-gray-300 bg-white rounded px-3 py-2 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500" rows={3} placeholder="Catatan tambahan (opsional)" />
                            </div>
                            <div className="flex gap-2">
                                <button type="submit" disabled={submitting} className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors disabled:opacity-60">
                                    {submitting ? "Mengirim..." : "Kirim Reservasi"}
                                </button>
                                <button type="button" onClick={() => navigate('/')} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded border border-gray-300 transition-colors">Kembali ke Beranda</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


