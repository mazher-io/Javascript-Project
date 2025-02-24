document.querySelectorAll(".faq").forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});
