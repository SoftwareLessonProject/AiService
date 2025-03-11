// recommendController.js
const express = require('express');
const router = express.Router();
const { getRecommendedBooks } = require('../Services/recommendService'); // Service importu

// Kitap öneri endpoint'i (POST isteği ile kitap adı al)
router.post('/', async (req, res) => {
    const { book } = req.body; // JSON formatında kitap adı alınır

    if (!book) {
        return res.status(400).json({ error: 'Lütfen bir kitap adı giriniz.' });
    }

    try {
        // API'den önerilen kitapları alıyoruz
        const recommendedBooks = await getRecommendedBooks(book);

        if (recommendedBooks.length === 0) {
            return res.status(404).json({ error: 'Bu isimde bir kitap bulunamadı veya benzer kitap yok.' });
        }

        res.json({ öneriler: recommendedBooks });
    } catch (error) {
        console.error("hata",error)
        res.status(500).json({ error: 'Sunucu hatası' });
    }
});

module.exports = router;
