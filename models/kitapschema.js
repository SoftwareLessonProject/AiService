const mongoose = require('mongoose');

const kitapSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Kitap_Adi: String,
    Yazar: String,
    Yayinevi: String,
    Yayim_Yili: Number,
    Sayfa_Sayisi: Number,
    ISBN: String,
    Kitap_Turu: String,
    Aciklama: String,
    Kapak_Resmi: String,
    similarity_text: String
});

module.exports = mongoose.model('Kitap', kitapSchema);
