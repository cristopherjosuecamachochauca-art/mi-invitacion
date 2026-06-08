/* ==========================
   ELEMENTOS
========================== */

const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const content = document.getElementById("invitationContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

/* ==========================
   ANIMACIÓN DE NÚMEROS
========================== */

function animateNumber(id, value) {

    const element = document.getElementById(id);

    if (element.textContent != value) {

        element.style.transition = "all .3s ease";
        element.style.transform = "scale(1.25)";

        setTimeout(() => {

            element.style.transform = "scale(1)";

        }, 300);

    }

    element.textContent = value;
}

/* ==========================
   ABRIR INVITACIÓN
========================== */

openBtn.addEventListener("click", () => {

    openBtn.style.transition =
        "all 1s cubic-bezier(.22,1,.36,1)";

    openBtn.style.transform =
        "translateY(-40px) scale(1.2) rotate(3deg)";

    openBtn.style.opacity = "0";

    setTimeout(() => {

        welcome.style.transition =
            "all 1.5s ease";

        welcome.style.opacity = "0";
        welcome.style.transform = "scale(1.15)";
        welcome.style.filter = "blur(15px)";

        setTimeout(() => {

            welcome.style.display = "none";

            content.style.display = "block";
            content.style.opacity = "0";
            content.style.transform = "translateY(80px)";

            setTimeout(() => {

                content.style.transition =
                    "all 1.8s ease";

                content.style.opacity = "1";
                content.style.transform = "translateY(0)";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 100);

        }, 1500);

    }, 800);

    music.play()
        .then(() => {

            music.volume = 0;

            let fade = setInterval(() => {

                if (music.volume < 0.95) {

                    music.volume += 0.05;

                } else {

                    clearInterval(fade);

                }

            }, 150);

            musicPlaying = true;

            musicBtn.innerHTML =
                '<i class="fa-solid fa-music"></i>';

        })
        .catch(() => {

            console.log(
                "El navegador bloqueó la reproducción automática."
            );

        });

});

/* ==========================
   BOTÓN MÚSICA
========================== */

musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML =
            '<i class="fa-solid fa-volume-xmark"></i>';

    } else {

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

    }

});

/* ==========================
   CUENTA REGRESIVA
========================== */

const weddingDate =
    new Date("August 22, 2026 15:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("countdown").innerHTML =
            "<h2>❤️ ¡Hoy es el gran día! ❤️</h2>";

        return;
    }

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60)) / 1000
        );

    animateNumber("days", days);
    animateNumber("hours", hours);
    animateNumber("minutes", minutes);
    animateNumber("seconds", seconds);

}

updateCountdown();

setInterval(updateCountdown, 1000);

/* ==========================
   APARICIÓN SUAVE
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";
    document.body.style.transform = "translateY(20px)";

    setTimeout(() => {

        document.body.style.transition =
            "all 1.5s ease";

        document.body.style.opacity = "1";
        document.body.style.transform =
            "translateY(0)";

    }, 100);

});
