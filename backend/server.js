import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "db_kuliner"
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

function createJwtToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ error: "Invalid or expired token" });
        }
        req.user = user;
        next();
    });
}

app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = createJwtToken({ username });
    res.json({ token, user: { username } });
});

app.get("/api/admin/me", authenticateToken, (req, res) => {
    res.json({ user: { username: req.user.username } });
});

app.get("/api/menu", (req, res) => {
    db.query("SELECT * FROM menu ORDER BY created_at DESC", (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        res.json(results);
    });
});

app.get("/api/health", (req, res) => {
    res.json({ 
        status: "OK", 
        message: "Server is running",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`API endpoints:`);
    console.log(`  - POST /api/admin/login - Admin login`);
    console.log(`  - GET /api/admin/me - Verify admin session`);
    console.log(`  - GET /api/menu - Get all menu items`);
    console.log(`  - GET /api/health - Health check`);
});
