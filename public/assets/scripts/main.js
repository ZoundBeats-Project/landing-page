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

// --- Mostrar / ocultar contraseña ---
function togglePassword(inputId, boton) {
    const input = document.getElementById(inputId);
    const esVisible = input.type === "text";
    input.type = esVisible ? "password" : "text";
    boton.textContent = esVisible ? "👁️" : "🙈";
}

// --- Envío de formularios (conecta aquí tu backend / API) ---
document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("form-login");
    const formRegistro = document.getElementById("form-registro");

    if (formLogin) {
        formLogin.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // TODO: reemplaza esto con tu llamada real de login (fetch a tu API)
            console.log("Login:", { email, password });

            // Ejemplo de redirección tras un login exitoso:
            // window.location.href = "index.html";
        });
    }

    if (formRegistro) {
        formRegistro.addEventListener("submit", (evento) => {
            evento.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // TODO: reemplaza esto con tu llamada real de registro (fetch a tu API)
            console.log("Registro:", { nombre, email, password });

            // Ejemplo de redirección tras un registro exitoso:
            // window.location.href = "login.html";
        });
    }
});

// ---------------------------------------------------
// main.js - funciones basicas de la pagina
// ---------------------------------------------------

// Mostrar u ocultar la contraseña al darle click al ojito
function togglePassword(idInput, boton) {
    const input = document.getElementById(idInput);
    if (input.type === "password") {
        input.type = "text";
        boton.textContent = "🙈";
    } else {
        input.type = "password";
        boton.textContent = "👁️";
    }
}

// Redirige a la pantalla de Google al darle click en el boton "Google"
function irAGoogle() {
    window.location.href = "google-login.html";
}

// Redirige a la pantalla de Apple al darle click en el boton "Apple"
function irAApple() {
    window.location.href = "apple-login.html";
}

// Redirige al dashboard cuando se elige una cuenta o se le da continuar
function irADashboard() {
    window.location.href = "dashboard.html";
}

// Cuando el usuario elige una cuenta en la pantalla de Google
// simplemente lo mandamos directo al dashboard (como si ya inicio sesion)
function seleccionarCuenta(elemento) {
    irADashboard();
}

// Redirige a la pantalla de detalle del curso al hacer click en un curso del dashboard
function irACurso() {
    window.location.href = "course-detail.html";
}

// =========================================================
// studio.js — ZoundBeats AI Studio
// JavaScript básico y sencillo
// =========================================================

// 1. Seleccionar un "pill" (Cyberpunk / Industrial, etc.)
// Cuando el usuario hace clic en un botón, le ponemos la clase
// "pill-activo" a ese y se la quitamos a sus hermanos.
let pills = document.querySelectorAll(".pill");

for (let i = 0; i < pills.length; i++) {
    pills[i].addEventListener("click", function () {
        let grupo = this.parentElement;
        let botonesDelGrupo = grupo.querySelectorAll(".pill");

        for (let j = 0; j < botonesDelGrupo.length; j++) {
            botonesDelGrupo[j].classList.remove("pill-activo");
        }

        this.classList.add("pill-activo");
    });
}

// 2. Botones "GENERATE"
// Por ahora solo muestran un mensaje en la consola.
// Aquí después puedes poner tu código para generar el audio.
let botonesGenerar = document.querySelectorAll(".btn-generar");

for (let i = 0; i < botonesGenerar.length; i++) {
    botonesGenerar[i].addEventListener("click", function () {
        console.log("Generando...");
    });
}

// 3. Enviar mensaje al AI Assistant
let inputIA = document.querySelector(".ia-input input");
let botonEnviarIA = document.querySelector(".btn-enviar-ia");

botonEnviarIA.addEventListener("click", function () {
    let mensaje = inputIA.value;
    console.log("Mensaje enviado: " + mensaje);
    inputIA.value = "";
});