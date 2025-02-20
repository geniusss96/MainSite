document.querySelector(".search-main").addEventListener("click", function() {
    var inputField = document.querySelector(".input");
    inputField.classList.toggle("active");
  
    // Toggle transform on search button for visual feedback
    var searchButton = document.querySelector('.search-button');
    searchButton.style.transform = inputField.classList.contains('active') ? 'rotate(45deg)' : 'rotate(0)';
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
