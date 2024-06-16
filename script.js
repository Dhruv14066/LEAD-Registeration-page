
window.addEventListener('resize', function() {
    var container = document.getElementById('responsive-container');
    var button = document.querySelector('button');
    var width = window.innerWidth;

    if (width <= 768) {
        container.style.width = '90%';
        button.style.width = '100%';
    } else {
        container.style.width = '300px';
        button.style.width = '100%';
    }
    
});

