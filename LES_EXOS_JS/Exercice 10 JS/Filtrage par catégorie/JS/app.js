document.getElementById('rep').addEventListener('click', function() {
    repButton = document.querySelectorAll('.reptile');
    repButton.forEach(function(element) {
        element.classList.contains("yellow") ? element.classList.remove("yellow") : element.classList.add("yellow");
    })});
   document.getElementById('mam').addEventListener('click', function() {
    mamButton = document.querySelectorAll('.mammifère');
    mamButton.forEach(function(element) {
        element.classList.contains("blue") ? element.classList.remove("blue") : element.classList.add("blue");
    })});
   document.getElementById('ins').addEventListener('click', function() {
    insButton = document.querySelectorAll('.insecte');
    insButton.forEach(function(element) {
        element.classList.contains("green") ? element.classList.remove("green") : element.classList.add("green");
    })});