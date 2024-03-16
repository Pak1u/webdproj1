window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
});
