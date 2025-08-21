import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="px-4 py-2 bg-gray-800 text-white rounded">Logout</button>
                </div>
                <div className="bg-white shadow rounded p-4">
                    <p className="text-sm text-gray-600">Selamat datang, <span className="font-medium">{user?.username}</span>.</p>
                    <p className="mt-2">Di sini nanti bisa ditambahkan fitur manajemen menu.</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


