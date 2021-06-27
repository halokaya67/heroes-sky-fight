let canvas = document.querySelector('#splashScreenCanvas');
let ctx = canvas.getContext('2d');

let pickHeroButton = document.querySelector('#pickHero');
let splashContent = document.querySelector('#splashContent');
let heroSelectionContent = document.querySelector('#heroSelectionContent');
let boyGreenHero = document.querySelector('#boyGreen');
let boyPurpleHero = document.querySelector('#boyPurple');
let girlPinkHero = document.querySelector('#girlPink');
let girlYellowHero = document.querySelector('#girlYellow');
let startGameButton = document.querySelector('#startGame');
let gameOverContent = document.querySelector('#gameOverContent');
let restartGameButton = document.querySelector('#restartGame');
let gameOverMessage = document.querySelector('#gameOverMessage');
let gameOverMessageTwo = document.querySelector('#gameOverMessageTwo');
let gameOverScore = document.querySelector('#gameOverScore');
let congratsMessage = document.querySelector('#congratsScreen');
let congratsMessageTwo = document.querySelector('#congratsScreenTwo');
let congratsScreenScore = document.querySelector('#congratsScreenScore');
let highScoreList = document.querySelector('#highscoreTable');

let pickedHero = null;
let positionX = 600, positionY = 600;
let isRight = false, isLeft = false;
let bossSpeed = 2;
let bossFireSpeed = 2;
let isFired = false;
let isGameOver = false;
let isWon = false;
let heroHp = 100;
let bossHp = 100;
let innocentCatch = 0;
let mobSpeed = 2;
let controlSpeed = 5;
let score = 0;
let medPackSpeed = 3;
let counter = 0;

let bg = new Image();
bg.src = './images/bg.png';

let bgCity = new Image();
bgCity.src = './images/bg-bottom.png'

let bgCloud = new Image();
bgCloud.src = './images/bg-cloud.png';

let boyGreen = new Image();
boyGreen.src = './images/hero-boy-green.png';

let boyPurple = new Image();
boyPurple.src = './images/hero-boy-purple.png';

let girlPink = new Image();
girlPink.src = './images/hero-girl-pink.png';

let girlYellow = new Image();
girlYellow.src = './images/hero-girl-yellow.png';

let mob = new Image();
mob.src = './images/enemy.png';

let boss = new Image();
boss.src = './images/boss.png';

let innocent = new Image();
innocent.src = './images/innocent.png';

let magic = new Image();
magic.src = './images/magic.png';

let fire = new Image();
fire.src = './images/fire.png';

let medPack = new Image();
medPack.src = './images/heal.png';

let splashScreenAudio = new Audio('./audio/splashScreen.mp3');
let gameScreenAudio = new Audio('./audio/gameScreen.mp3');
let magicFireAudio = new Audio('./audio/magicFire.wav');
let enemyHurtAudio = new Audio('./audio/enemyHurt.ogg');
let bossBattleAudio = new Audio('./audio/bossBattle.mp3');
let fireballAudio = new Audio('./audio/fireballAttack.wav');
let congratsScreenClap = new Audio('./audio/congratsScreenClapping.wav');
let congratsScreenAudio = new Audio('./audio/congratsScreen.wav');
let gameOverScreenAudio = new Audio('./audio/gameOverScreen.mp3');
let gameOverScreenRetro = new Audio('./audio/gameOverScreenRetro.wav');
let heroHurtAudio = new Audio('./audio/hurt.wav');
let innocentSaveAudio = new Audio('./audio/innocentSave.wav');
let heroHealAudio = new Audio('./audio/heal.wav');


let intervalId = 0;
let clouds = [
    {x: 1300, y: 100},
    {x: 2000, y: 300}
]

let mobs = [
    {x: 800, y: -100},
    {x: 400, y: -600},
    {x: 700, y: -1100},
    {x: 200, y: -1600},
    {x: 100, y: -2100},
    {x: 100, y: -2600},
    {x: 100, y: -3100},
]

let innocents = [
    {x: 400, y: -2500}
]

let bosses = [
    {x: 50, y: 50}
]

let magics = {
    x: (positionX + 30), 
    y: (positionY - 10)
}

let fires = [
    {x: 900, y: -100},
    {x: 700, y: -700},
    {x: 500, y: -1300},
    {x: 300, y: -1900},
    {x: 100, y: -1500},
    {x: 100, y: -3100},
]

let meds = [
    {x: 500, y: -2000}
]

let highscores = [
    {
        name: 'AAA',
        score: 0000
    },
    {
        name: 'BBB',
        score: 0000
    },
    {
        name: 'CCC',
        score: 0000
    },
    {
        name: 'DDD',
        score: 0000
    }
]

function drawSplashScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, 0, 0);

    drawClouds();

    ctx.drawImage(bgCity, 0, 400);
    ctx.drawImage(bgCity, 820, 400);
    splashScreenAudio.play();
    splashScreenAudio.volume = 0.05;
    intervalId = requestAnimationFrame(drawSplashScreen);
}

function drawPickHeroScreen() {
    splashContent.classList.add('d-none');
    heroSelectionContent.classList.remove('d-none');    
}

window.addEventListener('load', () => {
    drawSplashScreen();

    pickHeroButton.addEventListener('click', () => {
        drawPickHeroScreen();
    })

    startGameButton.addEventListener('click', () => {
        if (pickedHero === null) {
            alert('Please pick a hero!');
        } else {
            cancelAnimationFrame(intervalId);
            drawGameScreen();
        }
    })

    restartGameButton.addEventListener('click', () => {
        cancelAnimationFrame(intervalId);
        splashContent.classList.remove('d-none');
        gameOverContent.classList.add('d-none');
        congratsScreenAudio.pause();
        congratsScreenClap.pause();
        gameOverScreenAudio.pause();
        gameOverScreenRetro.pause();
        isGameOver = false;
        isWon = false;
        pickedHero = null;
        heroHp = 100;
        bossHp = 100;
        innocentCatch = 0;
        mobSpeed = 2;
        controlSpeed = 5;
        score = 0;
        bossSpeed = 2;
        bossFireSpeed = 2;
        medPackSpeed = 3;
        counter = 0;
        player = {
            name: null,
            score: score
        }
        drawSplashScreen();
    });

    boyGreenHero.addEventListener('click', () => {
        pickedHero = 'boyGreen';
    })

    boyPurpleHero.addEventListener('click', () => {
        pickedHero = 'boyPurple';
    })

    girlPinkHero.addEventListener('click', () => {
        pickedHero = 'girlPink';
    })

    girlYellowHero.addEventListener('click', () => {
        pickedHero = 'girlYellow';
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowRight') {
            isRight = true;
            isLeft = false;
        }
        if (event.code === 'ArrowLeft') {
            isLeft = true;
            isRight = false;  
        }
    });

    document.addEventListener('keyup', () => {
            isLeft = false;
            isRight = false;  
    })

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            isFired = true;
            magics = {
                x: (positionX + 25), 
                y: (positionY - 10),
                status: 1
            }
        }
    })
})