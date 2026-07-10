const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar-links");
const themeButtons = document.querySelectorAll(".theme-toggle");

const applyTheme = (theme) => {
    document.body.classList.toggle("light-theme", theme === "light");

    themeButtons.forEach((button) => {
        button.textContent = theme === "light" ? "Oscuro" : "Claro";
    });
};

const savedTheme = localStorage.getItem("zoundbeats-theme") || "dark";
applyTheme(savedTheme);

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menú");
        });
    });
}

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
        localStorage.setItem("zoundbeats-theme", nextTheme);
        applyTheme(nextTheme);
    });
});
