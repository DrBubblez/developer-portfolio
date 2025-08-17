document.querySelectorAll('#nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("underline", "underline-offset-7")
    }
}); // Underlines the current local page on the navbar

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn')

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('translate-x-0');
}); // Opens the Mobile Menu

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('translate-x-full')
    mobileMenu.classList.toggle('translate-x-0');
}); // Closes the Mobile Menu