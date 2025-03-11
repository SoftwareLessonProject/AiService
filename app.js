// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const recommendController = require('./Controllers/recommendController'); // Controller importu

const app = express();

// MongoDB bağlantısı
connectDB();

// JSON verisi almak için middleware ekle
app.use(express.json());

// Route'ları tanımlama
app.use('/recommend', recommendController);

// Portu .env dosyasından çekiyoruz
const PORT = process.env.PORT;

// Sunucuyu çalıştırma
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
