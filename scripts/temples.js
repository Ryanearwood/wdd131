


function updateFooter() {
    var year = new Date().getFullYear();
    var lastModified = document.lastModified;

    
    document.getElementById('footerYear').textContent = year;
    document.getElementById('footerLastModified').textContent = lastModified;
}


window.onload = updateFooter;


function toggleMenu() {
    var nav = document.getElementById('menu');
    var button = document.getElementById('menuToggle');

    nav.classList.toggle('hidden');

    if (nav.classList.contains('hidden')) {
        button.textContent = '☰';
    } else {
        button.textContent = 'X';
    }
}

