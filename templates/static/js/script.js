
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