const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const content = document.getElementById("invitationContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

/* ==========================
   ABRIR INVITACIÓN
========================== */

openBtn.addEventListener("click", () => {

    welcome.style.transition = "opacity 1s ease";
    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";

        content.style.display = "block";

        content.style.opacity = "0";

        setTimeout(() => {
            content.style.transition = "opacity 1.2s ease";
            content.style.opacity = "1";
        }, 100);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1000);

    music.play()
        .then(() => {
            musicPlaying = true;
        })
        .catch(() => {
            console.log("Audio bloqueado por el navegador");
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
        "<h2>¡Hoy es el gran día! ❤️</h2>";

        return;
    }

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCountdown();
setInterval(updateCountdown, 1000);
