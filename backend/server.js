import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Database configuration
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "db_kuliner"
});

// Test database connection
db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API Routes
app.get("/api/menu", (req, res) => {
    db.query("SELECT * FROM menu ORDER BY created_at DESC", (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: "Database error", details: err.message });
        }
        res.json(results);
    });
});

// Health check endpoint
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
    console.log(`  - GET /api/menu - Get all menu items`);
    console.log(`  - GET /api/health - Health check`);
});
