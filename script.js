const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const content = document.getElementById("invitationContent");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    envelope.style.transform = "scale(1.1)";

    setTimeout(() => {

        welcome.style.display = "none";

        content.style.display = "block";

        music.play().catch(() => {
            console.log("El navegador requiere interacción para reproducir audio.");
        });

    }, 800);

});

/* =========================
   CUENTA REGRESIVA
========================= */

const weddingDate = new Date("August 22, 2026 15:30:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("countdown").innerHTML =
        "<h2>¡Hoy es el gran día! ❤️</h2>";

    }

}, 1000);
