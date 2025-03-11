




// Benzerlik matrisini oluşturma
function createSimilarityMatrix(books) {
    // Burada benzerlik hesaplama algoritması olacak
    // Örneğin cosine similarity kullanılabilir
    let matrix = [];
    books.forEach((book1, index1) => {
        let similarities = [];
        books.forEach((book2, index2) => {
            if (index1 === index2) {
                similarities.push(1); // Aynı kitap kendisiyle en benzer
            } else {
                // Cosine similarity hesaplaması veya benzeri
                similarities.push(0.5); // Örnek, burada gerçek hesaplama yapılmalı
            }
        });
        matrix.push(similarities);
    });
    return matrix;
}

// Kitap önerilerini almak için fonksiyon
function recommendBooks(bookName, books, similarityMatrix) {
    const bookIndex = books.findIndex(book => book.Kitap_Adi.toLowerCase() === bookName.toLowerCase());
    if (bookIndex === -1) return [];

    // Benzerlik matrisini kullanarak en benzer kitapları öner
    const similarities = similarityMatrix[bookIndex];
    const sortedIndices = similarities
        .map((sim, index) => ({ index, sim }))
        .sort((a, b) => b.sim - a.sim)
        .slice(1, 6) // Kendisi dışındaki en benzer 5 kitap
        .map(item => item.index);

    return sortedIndices.map(index => books[index].Kitap_Adi); // Kitap adlarını döndür
}

module.exports = { createSimilarityMatrix, recommendBooks };
