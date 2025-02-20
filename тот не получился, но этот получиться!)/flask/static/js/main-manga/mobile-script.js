document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});



document.getElementById('katalog').addEventListener('click', function() {
    const cardContainer = document.getElementById('card-container');
    let card = document.getElementById('catalog-card');

    if (card) {
        cardContainer.removeChild(card);
    } else {
        card = document.createElement('div');
        card.id = 'catalog-card';
        card.className = 'card';
        card.textContent = 'Ваш каталог'; // Замените на содержимое вашего каталога
        cardContainer.appendChild(card);
    }
});

