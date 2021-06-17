function drawBossScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 950);
    ctx.drawImage(bg, 0, 0);

    drawClouds();

    drawHeroHp();

    drawBossHp();

    drawHeroes();

    moveHeroes();
    
    drawMagic();

    drawBossCollision();

    drawFireball();

    drawMedPack();
    
    ctx.drawImage(bgCity, 0, 750);
    ctx.drawImage(bgCity, 820, 750);

    gameScreenAudio.pause();

    bossBattleAudio.play();
    bossBattleAudio.volume = 0.05

    if (heroHp <= 0) {
        isGameOver = true;
    } else if (bossHp <= 0) {
        score += 1000;
        isWon = true;
    }

    if (isGameOver || isWon) {
        cancelAnimationFrame(intervalId);
        drawGameOverScreen();
        gameOverScore.innerHTML = `Your Score is ${score}!`;
        congratsScreenScore.innerHTML = `Your Score is ${score}!`;
    } else {
        intervalId = requestAnimationFrame(drawBossScreen);
    }
}