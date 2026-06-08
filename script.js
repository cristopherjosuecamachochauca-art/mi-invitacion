/* ==========================
   CONFIGURACIÓN INICIAL
========================== */
const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const content = document.getElementById("invitationContent");
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let musicPlaying = false;

/* ==========================
   ABRIR INVITACIÓN (Efecto 3D)
========================== */
openBtn.addEventListener("click", () => {
    // Animación de salida de la portada
    welcome.style.transition = "all 1s ease-in-out";
    welcome.style.opacity = "0";
    welcome.style.transform = "scale(0.9)";

    setTimeout(() => {
        welcome.style.display = "none";
        content.style.display = "block";
        
        // Efecto de entrada suave para el contenido
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);

    // Iniciar Música
    music.play().then(() => {
        musicPlaying = true;
    }).catch(error => {
        console.log("Reproducción automática bloqueada por el navegador.");
    });
});

/* ==========================
   BOTÓN MÚSICA (Toggle)
========================== */
musicBtn.addEventListener("click", () => {
    if (musicPlaying) {
        music.pause();
        musicBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        music.play();
        musicBtn.innerHTML = '<i class="fa-solid fa-music"></i>';
    }
    musicPlaying = !musicPlaying;
});

/* ==========================
   CUENTA REGRESIVA (Precisa)
========================== */
const targetDate = new Date("August 22, 2026 15:30:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
        document.getElementById("countdown").innerHTML = "<h3>¡El gran día ha llegado!</h3>";
        return;
    }

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((gap % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}

setInterval(updateCountdown, 1000);
updateCountdown();
