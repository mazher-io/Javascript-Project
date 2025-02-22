const scrolltotop = document.getElementById('scrollToTop');


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrolltotop.style.display = 'block';
    }
    else{
        scrolltotop.style.display = 'none';
    }

    scrolltotop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
)
