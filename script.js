/* ===================================
   ELEMENTOS
=================================== */

const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome");
const content = document.getElementById("invitationContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;

/* ===================================
   APERTURA PREMIUM
=================================== */

openBtn.addEventListener("click", () => {

    openBtn.style.pointerEvents = "none";

    openBtn.animate([
        {
            transform: "scale(1)",
            opacity: 1
        },
        {
            transform: "scale(1.2) translateY(-40px)",
            opacity: 0
        }
    ], {
        duration: 1200,
        easing: "ease"
    });

    setTimeout(() => {

        welcome.style.transition =
        "opacity 1.5s ease";

        welcome.style.opacity = "0";

        setTimeout(() => {

            welcome.style.display = "none";

            content.style.display = "block";

            content.style.opacity = "0";

            content.style.transform =
            "translateY(40px)";

            setTimeout(() => {

                content.style.transition =
                "all 1.5s ease";

                content.style.opacity = "1";

                content.style.transform =
                "translateY(0)";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }, 200);

        }, 1500);

    }, 1000);

    startMusic();

});

/* ===================================
   MUSICA
=================================== */

function startMusic(){

    music.play()
    .then(() => {

        musicPlaying = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

        musicBtn.classList.add("playing");

    })
    .catch(error => {

        console.log(error);

    });

}

musicBtn.addEventListener("click", () => {

    if(musicPlaying){

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

        musicBtn.classList.remove("playing");

    }else{

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';

        musicBtn.classList.add("playing");

    }

});

/* ===================================
   CONTADOR PREMIUM
=================================== */

const weddingDate =
new Date("August 22, 2026 15:30:00").getTime();

function animateValue(id,value){

    const element =
    document.getElementById(id);

    if(element.textContent !== value.toString()){

        element.animate([
            {
                transform:"scale(1.3)",
                opacity:.5
            },
            {
                transform:"scale(1)",
                opacity:1
            }
        ],{
            duration:400
        });

        element.textContent = value;
    }

}

function updateCountdown(){

    const now =
    new Date().getTime();

    const distance =
    weddingDate - now;

    if(distance < 0){

        document.getElementById(
        "countdown"
        ).innerHTML =
        "<h2>❤️ ¡Hoy es el gran día! ❤️</h2>";

        return;
    }

    const days =
    Math.floor(distance /
    (1000*60*60*24));

    const hours =
    Math.floor(
    (distance %
    (1000*60*60*24))
    /
    (1000*60*60)
    );

    const minutes =
    Math.floor(
    (distance %
    (1000*60*60))
    /
    (1000*60)
    );

    const seconds =
    Math.floor(
    (distance %
    (1000*60))
    /
    1000
    );

    animateValue("days",days);
    animateValue("hours",hours);
    animateValue("minutes",minutes);
    animateValue("seconds",seconds);

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ===================================
   EFECTO PARALLAX
=================================== */

window.addEventListener("scroll",() => {

    const scroll =
    window.pageYOffset;

    const hero =
    document.querySelector(".hero");

    if(hero){

        hero.style.transform =
        `translateY(${scroll * 0.08}px)`;
    }

});

/* ===================================
   APARICION SUAVE
=================================== */

window.addEventListener("load",() => {

    document.body.style.opacity = "0";

    document.body.style.transition =
    "opacity 2s ease";

    setTimeout(() => {

        document.body.style.opacity = "1";

    },300);

});

/* ===================================
   REVELAR TARJETAS
=================================== */

const cards =
document.querySelectorAll(".card");

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {

    card.classList.add("hidden-card");

    observer.observe(card);

});

/* ===================================
   PETALOS FLOTANTES
=================================== */

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "🌸";

    petal.style.left =
    Math.random()*100+"vw";

    petal.style.fontSize =
    (Math.random()*15+10)+"px";

    petal.style.animationDuration =
    (Math.random()*8+6)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },15000);

}

setInterval(createPetal,1200);

/* ===================================
   BRILLO TITULO
=================================== */

const title =
document.querySelector(".main-title");

if(title){

    setInterval(()=>{

        title.animate([
            {
                opacity:0.9
            },
            {
                opacity:1
            }
        ],{
            duration:1500
        });

    },2000);

}

/* ===================================
   BOTON MUSICA GIRATORIO
=================================== */

setInterval(()=>{

    if(musicPlaying){

        musicBtn.animate([
            {
                transform:"rotate(0deg)"
            },
            {
                transform:"rotate(360deg)"
            }
        ],{
            duration:4000,
            iterations:1
        });

    }

},4000);
.hidden-card{
    opacity:0;
    transform:translateY(60px);
}

.visible{
    opacity:1;
    transform:translateY(0);
    transition:all 1s ease;
}

.petal{
    position:fixed;
    top:-50px;
    pointer-events:none;
    z-index:999;
    animation:fall linear forwards;
}

@keyframes fall{

    from{
        transform:
        translateY(-50px)
        rotate(0deg);
    }

    to{
        transform:
        translateY(110vh)
        rotate(720deg);
    }

}

.playing{
    animation:pulseMusic 2s infinite;
}

@keyframes pulseMusic{

    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.1);
    }

    100%{
        transform:scale(1);
    }
}
