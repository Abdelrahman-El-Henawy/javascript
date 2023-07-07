window.addEventListener("scroll", function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector(".navbar");
    if (scrollPosition > 750) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
});