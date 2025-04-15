document.addEventListener("DOMContentLoaded", function() {
    const regMenu = document.querySelector(".reg-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const menuIcons = document.querySelector(".menu-icons");
    const menuToggle = document.querySelector(".menu-toggle");
    const katalogBtn = document.getElementById("katalog"); // Проверяем, существует ли этот элемент
    const cardContainer = document.getElementById("card-container"); // Проверяем, существует ли этот элемент

    if (!regMenu || !navLinks || !menuIcons || !menuToggle) {
        console.error("Ошибка: один из элементов не найден.");
        return;
    }

    function moveRegMenu() {
        if (window.innerWidth <= 768) {
            if (!navLinks.contains(regMenu)) {
                navLinks.appendChild(regMenu);
            }
        } else {
            if (!menuIcons.contains(regMenu)) {
                menuIcons.appendChild(regMenu);
            }
        }
    }

    moveRegMenu(); // Проверяем при загрузке
    window.addEventListener("resize", moveRegMenu); // Проверяем при изменении экрана

    // Открытие мобильного меню
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });

    // Проверяем, есть ли кнопка "Каталог", перед добавлением обработчика
    if (katalogBtn && cardContainer) {
        katalogBtn.addEventListener("click", function() {
            let card = document.getElementById("catalog-card");

            if (card) {
                cardContainer.removeChild(card);
            } else {
                card = document.createElement("div");
                card.id = "catalog-card";
                card.className = "card";
                card.textContent = "Ваш каталог"; // Замените на содержимое вашего каталога
                cardContainer.appendChild(card);
            }
        });
    } else {
        console.warn("Предупреждение: кнопка 'Каталог' или контейнер карточек не найдены.");
    }
});
