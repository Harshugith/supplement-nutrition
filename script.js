// Navbar color change on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 80) {
        nav.classList.add("solid");
    } else {
        nav.classList.remove("solid");
    }
});

// Product cards animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".product-card").forEach(card => {
    observer.observe(card);
});
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const productName = card.getAttribute("data-product");
        window.location.href = `product.html?product=${productName}`;
    });
});
