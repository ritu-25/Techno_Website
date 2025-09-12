document.addEventListener('DOMContentLoaded', function () {
    const mainNavbar = document.getElementById('mainNavbar');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            mainNavbar.classList.add('scrolled');
        } else {
            mainNavbar.classList.remove('scrolled');
        }
    });

    



    
});


