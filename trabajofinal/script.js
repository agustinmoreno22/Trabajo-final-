function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
function closeNavbar() {
    var menu = document.querySelector('.menu');
    menu.classList.remove('show');
}
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuIcon = document.querySelector('.menu-icon');
    if (menu.classList.contains('show') && event.target !== menu && event.target !== menuIcon) {
        menu.classList.remove('show');
    }
});

var links = document.querySelectorAll('.menu a');
links.forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        menu.classList.remove('show');
    });
});