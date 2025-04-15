document.querySelector(".search-main").addEventListener("click", function() {
    var inputField = document.querySelector(".input");
    var searchTextButton = document.querySelector('.search-text-bt');
    var searchButton = document.querySelector('.search-button'); // Иконка 🔍 внутри кнопки

    inputField.classList.toggle("active");
    searchTextButton.classList.toggle("active");

    // Анимация поворота только для иконки 🔍
    searchButton.style.transform = inputField.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0deg)';
    
    // Автофокус на поле ввода
    if (inputField.classList.contains("active")) {
        inputField.focus();
    }
});

// Запуск поиска при нажатии Enter
document.querySelector(".input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".search-text-bt").click();
    }
});

// Запуск поиска при нажатии Enter
document.querySelector(".input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".search-text-bt").click();
    }
});

// Запуск поиска при нажатии Enter
document.querySelector(".input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".search-text-bt").click();
    }
});

document.querySelector(".katalog-main").addEventListener("click", function() {
    var katalogImg = document.querySelector('.katalog-img');
    katalogImg.style.transform = 'rotate(90deg)';
    katalogImg.style.transition = 'all 0.3s ease-in-out';

    // Open the modal
    document.getElementById('myModal').classList.add('active');
});

document.querySelector('.modal').addEventListener('click', function() {
    var katalogImg = document.querySelector('.katalog-img');
    katalogImg.style.transform = 'rotate(0deg)';

    // Close the modal
    document.getElementById('myModal').classList.remove('active');
});


var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var closeBtn = document.querySelector(".btn-close");

// Открываем модальное окно при нажатии на кнопку каталога
btn.onclick = function() {
    modal.style.display = "block";
}

// Закрываем модальное окно при нажатии на кнопку с крестиком
closeBtn.onclick = function() {
    modal.style.display = "none";
    
}

// Закрываем модальное окно при нажатии вне его области
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var vxodJs = document.querySelector(".vxod-js");  
var shimmers = document.querySelectorAll(".shimmer"); 
shimmers.forEach(function(shimmer) {
    shimmer.addEventListener("click", function() { 
        if (vxodJs.style.display === "none" || vxodJs.style.display === "") {
            vxodJs.style.display = "block";
        } else {
            vxodJs.style.display = "none";
        }
    });
});

document.querySelector('.text-manga-btn').addEventListener('click', function() {
    var textElement = document.querySelector('.text-opisaniya');
    if (textElement.classList.contains('expanded')) {
        textElement.classList.remove('expanded');
        this.textContent = 'Читать больше';
    } else {
        textElement.classList.add('expanded');
        this.textContent = 'Скрыть';
    }
});



function searchLive(query) {
    let resultsBox = document.getElementById("search-results");

    if (query.trim() !== "") {
        fetch("/", {
            method: "POST",
            body: new URLSearchParams({search: query}),
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        })
        .then(response => response.text())
        .then(html => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(html, "text/html");
            let newResults = doc.getElementById("search-results").innerHTML;

            if (newResults.trim() !== "") {
                resultsBox.innerHTML = newResults;
                resultsBox.style.display = "block"; // Показываем, если есть результаты
            } else {
                resultsBox.style.display = "none"; // Если результатов нет, скрываем
            }
        });
    } else {
        resultsBox.style.display = "none"; // Скрываем, если пусто
    }
}
// Скрываем список при клике вне поиска
document.addEventListener("click", function(event) {
    let searchBox = document.querySelector(".input");
    let resultsBox = document.getElementById("search-results");

    if (!searchBox.contains(event.target) && !resultsBox.contains(event.target)) {
        resultsBox.style.display = "none";
    }
});


