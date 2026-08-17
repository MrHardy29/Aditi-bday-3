/* =========================================
   BIRTHDAY DATE
========================================= */

const birthdayDate =
    new Date("August 19, 2026 00:00:00").getTime();


/* =========================================
   COUNTDOWN
========================================= */

function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        birthdayDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   FLOATING HEARTS & STARS
========================================= */

const particleContainer =
    document.getElementById("particles");


const particleSymbols = [
    "♡",
    "✦",
    "✧",
    "♥",
    "⋆",
    "✨"
];


function createParticle() {

    const particle =
        document.createElement("div");


    particle.classList.add(
        "floating"
    );


    particle.textContent =
        particleSymbols[
            Math.floor(
                Math.random() *
                particleSymbols.length
            )
        ];


    particle.style.left =
        Math.random() * 100 + "vw";


    particle.style.fontSize =
        (Math.random() * 15 + 10) + "px";


    particle.style.animationDuration =
        (Math.random() * 7 + 6) + "s";


    particleContainer.appendChild(
        particle
    );


    setTimeout(() => {

        particle.remove();

    }, 14000);
}


setInterval(
    createParticle,
    900
);


/* =========================================
   WISH BUTTON
========================================= */

const wishButton =
    document.getElementById("wishButton");


wishButton.addEventListener(
    "click",
    () => {

        launchConfetti();

        wishButton.textContent =
            "Wish sent into the universe ✨";

        setTimeout(() => {

            wishButton.textContent =
                "Make another wish ✨";

        }, 4000);

    }
);


/* =========================================
   CONFETTI
========================================= */

function launchConfetti() {

    const duration =
        3000;


    const end =
        Date.now() +
        duration;


    const interval =
        setInterval(() => {

            if (Date.now() > end) {

                clearInterval(interval);

                return;
            }


            confetti({
                particleCount: 5,

                spread: 70,

                startVelocity: 30,

                origin: {
                    x: Math.random(),
                    y: Math.random() * 0.6
                }
            });


        }, 100);

}


/* =========================================
   MUSIC
========================================= */

const music =
    document.getElementById(
        "birthdayMusic"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    () => {

        if (musicPlaying) {

            music.pause();

            musicButton.textContent =
                "♫";

            musicPlaying = false;

        } else {

            music.play()
                .then(() => {

                    musicButton.textContent =
                        "❚❚";

                    musicPlaying = true;

                })
                .catch(() => {

                    alert(
                        "Tap the button again to start the music."
                    );

                });

        }

    }
);


/* =========================================
   FIRST BIRTHDAY CONFETTI
========================================= */

window.addEventListener(
    "load",
    () => {

        const now =
            new Date();


        if (
            now.getMonth() === 7 &&
            now.getDate() === 19
        ) {

            setTimeout(
                launchConfetti,
                1200
            );

        }

    }
);
