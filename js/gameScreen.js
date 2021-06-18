

function drawGameScreen() {
    heroSelectionContent.classList.add('d-none');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 950);

    ctx.drawImage(bg, 0, 0);

    drawClouds();

    drawHeroHp();

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