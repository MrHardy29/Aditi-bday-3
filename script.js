/* =====================================================
   SETTINGS
===================================================== */

/*
   CHANGE THIS NAME.

   Example:

   const herName = "Noobdi";

*/

const herName = "HER NAME";


/*
   Birthday date.

   The website uses the user's local time.

*/

const birthdayDate =
    new Date(
        "August 19, 2026 00:00:00"
    ).getTime();


/* =====================================================
   INTRO STARS
===================================================== */

const starCanvas =
    document.getElementById(
        "starCanvas"
    );

const starCtx =
    starCanvas.getContext("2d");


let stars = [];


function resizeStarCanvas() {

    starCanvas.width =
        window.innerWidth;

    starCanvas.height =
        window.innerHeight;

}


function createStars() {

    stars = [];

    const amount =
        Math.min(
            180,
            Math.floor(
                window.innerWidth *
                window.innerHeight /
                7000
            )
        );


    for(let i = 0; i < amount; i++) {

        stars.push({

            x:
                Math.random() *
                starCanvas.width,

            y:
                Math.random() *
                starCanvas.height,

            radius:
                Math.random() *
                1.4,

            speed:
                Math.random() *
                .3 +
                .05,

            alpha:
                Math.random()
        });

    }

}


function drawStars() {

    starCtx.clearRect(
        0,
        0,
        starCanvas.width,
        starCanvas.height
    );


    stars.forEach(star => {

        star.y -= star.speed;


        if(star.y < 0) {

            star.y =
                starCanvas.height;

        }


        starCtx.beginPath();

        starCtx.arc(
            star.x,
            star.y,
            star.radius,
            0,
            Math.PI * 2
        );


        starCtx.fillStyle =
            `rgba(
                255,
                220,
                235,
                ${star.alpha}
            )`;


        starCtx.fill();

    });


    requestAnimationFrame(
        drawStars
    );

}


resizeStarCanvas();

createStars();

drawStars();


window.addEventListener(
    "resize",
    () => {

        resizeStarCanvas();

        createStars();

    }
);


/* =====================================================
   ENTER WEBSITE
===================================================== */

const intro =
    document.getElementById(
        "intro"
    );


const enterButton =
    document.getElementById(
        "enterButton"
    );


enterButton.addEventListener(
    "click",
    () => {

        intro.classList.add(
            "hide"
        );


        startMusic();


        setTimeout(
            typeName,
            700
        );

    }
);


/* =====================================================
   NAME TYPING
===================================================== */

const nameElement =
    document.getElementById(
        "nameText"
    );


let nameIndex = 0;


function typeName() {

    if(
        nameIndex <
        herName.length
    ) {

        nameElement.textContent +=
            herName.charAt(
                nameIndex
            );

        nameIndex++;

        setTimeout(
            typeName,
            130
        );

    }

}


/* =====================================================
   COUNTDOWN
===================================================== */

const countdownTimer =
    document.getElementById(
        "countdownTimer"
    );


const birthdayMessage =
    document.getElementById(
        "birthdayMessage"
    );


function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        birthdayDate - now;


    if(difference <= 0) {

        countdownTimer.classList.add(
            "hidden"
        );


        birthdayMessage.classList.remove(
            "hidden"
        );


        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            difference %
            (1000 * 60 * 60 * 24) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            difference %
            (1000 * 60 * 60) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            difference %
            (1000 * 60) /
            1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days)
        .padStart(2,"0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours)
        .padStart(2,"0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes)
        .padStart(2,"0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds)
        .padStart(2,"0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   LETTER
===================================================== */

const letter =
    document.getElementById(
        "letter"
    );


const openLetter =
    document.getElementById(
        "openLetter"
    );


openLetter.addEventListener(
    "click",
    () => {

        letter.classList.toggle(
            "open"
        );


        if(
            letter.classList.contains(
                "open"
            )
        ) {

            openLetter.innerHTML =
                `<span>Close the letter</span>
                 <i>↑</i>`;

        } else {

            openLetter.innerHTML =
                `<span>Open the letter</span>
                 <i>→</i>`;

        }

    }
);


/* =====================================================
   GIFT BOX
===================================================== */

const giftBox =
    document.getElementById(
        "giftBox"
    );


const giftText =
    document.getElementById(
        "giftText"
    );


giftBox.addEventListener(
    "click",
    () => {

        const opened =
            giftBox.classList.toggle(
                "open"
            );


        if(opened) {

            giftText.textContent =
                "A little happiness, just for you ✨";


            fireworkBurst(
                window.innerWidth / 2,
                window.innerHeight / 2
            );

        } else {

            giftText.textContent =
                "Tap the gift 🎁";

        }

    }
);


/* =====================================================
   MUSIC
===================================================== */

const music =
    document.getElementById(
        "music"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicStarted =
    false;


function startMusic() {

    if(musicStarted)
        return;


    music.volume =
        0.35;


    music.play()
        .then(() => {

            musicStarted =
                true;

            musicButton
                .classList.add(
                    "playing"
                );

        })
        .catch(() => {

            /*
                Browser blocked autoplay.
                User can press music button.
            */

        });

}


musicButton.addEventListener(
    "click",
    () => {

        if(
            music.paused
        ) {

            music.play();

            musicStarted =
                true;

            musicButton
                .classList.add(
                    "playing"
                );

        } else {

            music.pause();

            musicButton
                .classList.remove(
                    "playing"
                );

        }

    }
);


/* =====================================================
   HEART CONSTELLATION
===================================================== */

const heartCanvas =
    document.getElementById(
        "heartCanvas"
    );


const heartCtx =
    heartCanvas.getContext(
        "2d"
    );


let heartParticles = [];


function resizeHeartCanvas() {

    heartCanvas.width =
        window.innerWidth;

    heartCanvas.height =
        window.innerHeight;

}


function heartFunction(t) {

    const x =
        16 *
        Math.pow(
            Math.sin(t),
            3
        );


    const y =
        -(
            13 *
            Math.cos(t) -
            5 *
            Math.cos(2*t) -
            2 *
            Math.cos(3*t) -
            Math.cos(4*t)
        );


    return {
        x,
        y
    };

}


function createHeartParticles() {

    heartParticles = [];


    for(
        let i = 0;
        i < 120;
        i++
    ) {

        const t =
            Math.random() *
            Math.PI *
            2;


        const point =
            heartFunction(t);


        heartParticles.push({

            x:
                point.x,

            y:
                point.y,

            phase:
                Math.random() *
                Math.PI *
                2,

            size:
                Math.random() *
                1.5 +
                .5

        });

    }

}


function drawHeart() {

    heartCtx.clearRect(
        0,
        0,
        heartCanvas.width,
        heartCanvas.height
    );


    const scale =
        Math.min(
            window.innerWidth,
            window.innerHeight
        ) / 45;


    const centerX =
        heartCanvas.width / 2;


    const centerY =
        heartCanvas.height / 2;


    const time =
        Date.now() * .001;


    heartParticles.forEach(
        (particle, index) => {

            const pulse =
                Math.sin(
                    time +
                    particle.phase
                ) * .2 +
                1;


            const x =
                centerX +
                particle.x *
                scale *
                pulse;


            const y =
                centerY +
                particle.y *
                scale *
                pulse;


            heartCtx.beginPath();


            heartCtx.arc(
                x,
                y,
                particle.size,
                0,
                Math.PI * 2
            );


            heartCtx.fillStyle =
                "rgba(255,120,165,.5)";


            heartCtx.fill();


            /*
               Connecting nearby particles
            */

            for(
                let j = index + 1;
                j < heartParticles.length;
                j++
            ) {

                const other =
                    heartParticles[j];


                const ox =
                    centerX +
                    other.x *
                    scale *
                    pulse;


                const oy =
                    centerY +
                    other.y *
                    scale *
                    pulse;


                const dx =
                    x - ox;


                const dy =
                    y - oy;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if(
                    distance < 55
                ) {

                    heartCtx.beginPath();

                    heartCtx.moveTo(
                        x,
                        y
                    );

                    heartCtx.lineTo(
                        ox,
                        oy
                    );

                    heartCtx.strokeStyle =
                        "rgba(255,120,165,.07)";

                    heartCtx.stroke();

                }

            }

        }
    );


    requestAnimationFrame(
        drawHeart
    );

}


resizeHeartCanvas();

createHeartParticles();

drawHeart();


window.addEventListener(
    "resize",
    () => {

        resizeHeartCanvas();

        createHeartParticles();

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "active"
                            );

                    }

                }
            );

        },

        {
            threshold: .15
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   CONFETTI / FIREWORKS
===================================================== */

const confettiCanvas =
    document.getElementById(
        "confettiCanvas"
    );


const confettiCtx =
    confettiCanvas.getContext(
        "2d"
    );


let confettiParticles = [];


function resizeConfetti() {

    confettiCanvas.width =
        window.innerWidth;

    confettiCanvas.height =
        window.innerHeight;

}


resizeConfetti();


window.addEventListener(
    "resize",
    resizeConfetti
);


function createConfetti(
    x,
    y,
    amount = 150
) {

    for(
        let i = 0;
        i < amount;
        i++
    ) {

        const colors = [
            "#ff6f9f",
            "#ffd98c",
            "#ffffff",
            "#c27cff",
            "#ff386f"
        ];


        confettiParticles.push({

            x,
            y,

            vx:
                (Math.random() - .5) *
                15,

            vy:
                Math.random() *
                -15 -
                4,

            gravity:
                .25,

            size:
                Math.random() *
                5 +
                3,

            rotation:
                Math.random() *
                360,

            rotationSpeed:
                Math.random() *
                10 -

                5,

            color:
                colors[
                    Math.floor(
                        Math.random() *
                        colors.length
                    )
                ],

            life:
                1

        });

    }

}


function animateConfetti() {

    confettiCtx.clearRect(
        0,
        0,
        confettiCanvas.width,
        confettiCanvas.height
    );


    confettiParticles =
        confettiParticles.filter(
            particle =>
                particle.life > 0
        );


    confettiParticles.forEach(
        particle => {

            particle.x +=
                particle.vx;


            particle.y +=
                particle.vy;


            particle.vy +=
                particle.gravity;


            particle.rotation +=
                particle.rotationSpeed;


            particle.life -=
                .006;


            confettiCtx.save();

            confettiCtx.translate(
                particle.x,
                particle.y
            );


            confettiCtx.rotate(
                particle.rotation *
                Math.PI /
                180
            );


            confettiCtx.globalAlpha =
                particle.life;


            confettiCtx.fillStyle =
                particle.color;


            confettiCtx.fillRect(
                -particle.size / 2,
                -particle.size / 2,
                particle.size,
                particle.size * 1.8
            );


            confettiCtx.restore();

        }
    );


    requestAnimationFrame(
        animateConfetti
    );

}


animateConfetti();


function fireworkBurst(
    x,
    y
) {

    createConfetti(
        x,
        y,
        220
    );

}


/* =====================================================
   FINAL WISH
===================================================== */

const wishButton =
    document.getElementById(
        "wishButton"
    );


const finalMessage =
    document.getElementById(
        "finalMessage"
    );


wishButton.addEventListener(
    "click",
    () => {

        finalMessage.classList.remove(
            "hidden"
        );


        wishButton.textContent =
            "✨ Wish sent";


        /*
           Multiple fireworks
        */

        const positions = [

            [window.innerWidth * .2,
             window.innerHeight * .35],

            [window.innerWidth * .5,
             window.innerHeight * .25],

            [window.innerWidth * .8,
             window.innerHeight * .35],

            [window.innerWidth * .35,
             window.innerHeight * .2],

            [window.innerWidth * .65,
             window.innerHeight * .2]

        ];


        positions.forEach(
            (position, index) => {

                setTimeout(
                    () => {

                        fireworkBurst(
                            position[0],
                            position[1]
                        );

                    },
                    index * 350
                );

            }
        );

    }
);


/* =====================================================
   MIDNIGHT TRANSFORMATION
===================================================== */

let midnightTriggered =
    false;


function checkBirthday() {

    const now =
        new Date();


    if(
        now.getMonth() === 7 &&
        now.getDate() === 19 &&
        !midnightTriggered
    ) {

        midnightTriggered =
            true;


        countdownTimer.classList.add(
            "hidden"
        );


        birthdayMessage.classList.remove(
            "hidden"
        );


        setTimeout(
            () => {

                fireworkBurst(
                    window.innerWidth / 2,
                    window.innerHeight / 3
                );

            },
            500
        );

    }

}


checkBirthday();

setInterval(
    checkBirthday,
    1000
);
