const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove("active");
        mobileNav.classList.remove("hamburger-active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeInItems = document.querySelectorAll('.fade-in-item');

    const observerOptions = {
        threshold: 0.2 // Pemicu saat 20% dari item terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Hentikan pengamatan setelah animasi dipicu agar tidak berulang
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInItems.forEach(item => {
        observer.observe(item);
    });
});
