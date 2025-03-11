const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Kitaplik');
        console.log('MongoDB bağlantısı başarılı!');
    } catch (error) {
        console.error('MongoDB bağlantı hatası:', error.message);
        process.exit(1); // Bağlantı hatası olursa uygulamayı durdur
    }
};

module.exports = connectDB;
