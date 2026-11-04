const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector("#main-nav");
const siteHeader = document.querySelector(".site-header");

if (menuButton && mainNav && siteHeader) {
    siteHeader.classList.add("menu-ready");

    function closeMenu() {
        mainNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "Menu";
    }

    menuButton.addEventListener("click", function () {
        const isOpen = mainNav.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            menuButton.textContent = "Close";
        } else {
            menuButton.textContent = "Menu";
        }
    });

    mainNav.addEventListener("click", function (event) {
        if (event.target.closest("a") && window.innerWidth <= 700) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (
            event.key === "Escape" &&
            mainNav.classList.contains("is-open") &&
            window.innerWidth <= 700
        ) {
            closeMenu();
            menuButton.focus();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}