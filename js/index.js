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

