

function drawGameScreen() {
    heroSelectionContent.classList.add('d-none');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 950);

    ctx.drawImage(bg, 0, 0);

    drawClouds();

    drawHeroes();

    moveHeroes();    

    drawMobs();

    drawInnocent();

    if (isFired) {
        drawMagic();
    }

    if (count === 3 ) {
        cancelAnimationFrame(intervalId);
        drawBossScreen();
    }

    if (heroHp === 0) {
        isGameOver = true;
    }

    ctx.drawImage(bgCity, 0, 750);
    ctx.drawImage(bgCity, 820, 750);

    if (isGameOver || isWon) {
        cancelAnimationFrame(intervalId);
        drawGameOverScreen();
    } else if (count !== 3) {
        intervalId = requestAnimationFrame(drawGameScreen);
    }
}