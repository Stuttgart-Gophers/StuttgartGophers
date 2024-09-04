
const toggle = document.getElementById("toggle");

document.getElementById('burger-menu').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});

const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    toggle.innerHTML = "Light"
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
        toggle.innerHTML = "Dark"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme')) {
        document.documentElement.classList.add('dark');
        toggle.innerHTML = "Light"
        
    } else {
        document.documentElement.classList.remove('dark');
        toggle.innerHTML = "Dark"
        
    }
});

document.querySelector('#dark-toggle').addEventListener('click', toggleDarkMode);


const fadeElement = document.querySelector('.fade-element');
const fadeInPosition = 300; // Adjust this value to the scroll position where the fade-in should occur

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= fadeInPosition) {
        // Fade in when scroll reaches the specified position
        fadeElement.classList.remove('opacity-100');
        fadeElement.classList.add('opacity-0');
    } else {
        // Fade out when scrolling back up
        fadeElement.classList.remove('opacity-0');
        fadeElement.classList.add('opacity-100');
    }
});


