

function drawGameScreen() {
    heroSelectionContent.classList.add('d-none');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 950);

    ctx.drawImage(bg, 0, 0);

    drawClouds();

    ctx.beginPath();
    if (heroHp <= 100 && heroHp > 75) {
        ctx.fillStyle = '#38b000';
    } else if (heroHp <= 75 && heroHp > 50) {
        ctx.fillStyle = '#f7b538';
    } else if (heroHp <= 50 && heroHp > 25) {
        ctx.fillStyle = '#d8572a';
    } else if (heroHp <= 25) {
        ctx.fillStyle = '#c32f27';
    }
    ctx.fillRect(20, 20, (heroHp * 3), 30);

    ctx.font = 'bolder 44px Annie Use Your Telescope';
    ctx.fillText(`Score: ${score}`, 20, 90);
    ctx.closePath();

    drawHeroes();

    moveHeroes();    

    drawMobs();

    drawInnocent();

    drawMedPack();

    drawMagic();


    if (innocentCatch === 3) {
        cancelAnimationFrame(intervalId);
        drawBossScreen();
    }

    if (heroHp === 0) {
        isGameOver = true;
    }

    ctx.drawImage(bgCity, 0, 750);
    ctx.drawImage(bgCity, 820, 750);

    splashScreenAudio.pause();

    gameScreenAudio.play();
    gameScreenAudio.volume = 0.05;

    if (isGameOver) {
        cancelAnimationFrame(intervalId);
        drawGameOverScreen();
        gameOverScore.innerHTML = `Your Score is ${score}!`;
        congratsScreenScore.innerHTML = `Your Score is ${score}!`;
    } else if (innocentCatch !== 3) {
        intervalId = requestAnimationFrame(drawGameScreen);
    }
}