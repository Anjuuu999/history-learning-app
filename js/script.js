const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
    function updateHeader() {
        if (window.scrollY > 20) {
            siteHeader.classList.add("is-scrolled");
        } else {
            siteHeader.classList.remove("is-scrolled");
        }
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach(function (item) {
        revealObserver.observe(item);
    });
}