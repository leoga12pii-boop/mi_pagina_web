// =========================
// MENU AL HACER SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "#0b1120";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.45)";

    } else {

        navbar.style.background = "#111827";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    }

});

// =========================
// ANIMACIÓN DE TARJETAS
// =========================

const elementos = document.querySelectorAll(".card,.categoria,.oferta,.beneficio,.stat");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = ".7s ease";

    observer.observe(el);

});

// =========================
// BOTÓN IR ARRIBA
// =========================

const boton = document.createElement("button");

boton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

boton.style.position = "fixed";
boton.style.right = "30px";
boton.style.bottom = "30px";
boton.style.width = "55px";
boton.style.height = "55px";
boton.style.border = "none";
boton.style.borderRadius = "50%";
boton.style.background = "#8b5cf6";
boton.style.color = "#fff";
boton.style.cursor = "pointer";
boton.style.fontSize = "22px";
boton.style.display = "none";
boton.style.zIndex = "1000";
boton.style.boxShadow = "0 10px 25px rgba(0,0,0,.35)";

document.body.appendChild(boton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        boton.style.display = "block";

    } else {

        boton.style.display = "none";

    }

});

boton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// SCROLL SUAVE EN MENÚ
// =========================

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});