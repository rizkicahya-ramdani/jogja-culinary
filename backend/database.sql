-- Buat database
CREATE DATABASE IF NOT EXISTS db_kuliner;
USE db_kuliner;

-- Buat tabel menu
CREATE TABLE IF NOT EXISTS menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_menu VARCHAR(255) NOT NULL,
    deskripsi TEXT,
    harga DECIMAL(10,2) NOT NULL,
    foto_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Masukkan data sample
INSERT INTO menu (nama_menu, deskripsi, harga, foto_url) VALUES
('Gudeg Jogja', 'Gudeg khas Jogja dengan nangka muda yang dimasak dengan santan dan bumbu rempah khas', 25000, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'),
('Sate Klathak', 'Sate kambing dengan bumbu khas Jogja yang dibakar dengan arang', 35000, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'),
('Bakpia Pathok', 'Bakpia tradisional Jogja dengan isian kacang hijau yang lembut', 15000, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'),
('Wedang Ronde', 'Minuman hangat dengan ronde (bola-bola ketan) dan jahe', 12000, 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop'),
('Soto Jogja', 'Soto ayam khas Jogja dengan kuah bening dan pelengkap lengkap', 20000, 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'),
('Es Dawet Ayu', 'Minuman segar dengan dawet hijau, santan, dan gula merah', 8000, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop');
