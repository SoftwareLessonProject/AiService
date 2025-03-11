const axios = require('axios');

async function getRecommendedBooks(bookName) {
    try {
        const response = await axios.post('http://localhost:3000/recommend', { book: bookName });
        return response.data;
    } catch (error) {
        console.error('API isteği hatası:', error.message);
        throw error;  // Hata fırlatılabilir
    }
}

module.exports = { getRecommendedBooks };
