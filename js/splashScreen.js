let canvas = document.querySelector('#splashScreenCanvas');
let ctx = canvas.getContext('2d');

let pickHero = document.querySelector('#pickHero');
let splashContent = document.querySelector('#splashContent');
let heroSelectionContent = document.querySelector('#heroSelectionContent');

let bg = new Image();
bg.src = './images/bg-1.png';

let bgCity = new Image();
bgCity.src = './images/bg-bottom-2.png'

let bgCloud = new Image();
bgCloud.src = './images/bg-cloud-1.png';

let intervalId = 0;
let clouds = [
    {x: 1300, y: 100},
    {x: 2000, y: 300},
]

function drawSplashScreen() {
    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < clouds.length; i++) {
        ctx.drawImage(bgCloud, clouds[i].x, clouds[i].y);
        clouds[i].x -= 1;

        if (clouds[i].x + bgCloud.width < 0) {
            clouds[i] = {
                x: 1300,
                y: Math.floor(Math.random() * (canvas.height - 200))
            }
        }
    }

    ctx.drawImage(bgCity, 0, 400);
    ctx.drawImage(bgCity, 820, 400);

    intervalId = requestAnimationFrame(drawSplashScreen);
}

function drawPickHeroScreen() {
    splashContent.classList.add('d-none');
    heroSelectionContent.classList.remove('d-none');
    
}

window.addEventListener('load', () => {
    drawSplashScreen();

    pickHero.addEventListener('click', () => {
        drawPickHeroScreen();
    })
})