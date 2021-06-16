function drawGameOverScreen() {
    gameOverContent.classList.remove('d-none');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 600);

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

    if (isWon === true) {
        gameOverMessage.classList.add('d-none');
        gameOverMessageTwo.classList.add('d-none');
        gameOverScore.classList.add('d-none');
        congratsMessage.classList.remove('d-none');
        congratsMessageTwo.classList.remove('d-none');
        congratsScreenScore.classList.remove('d-none');
    } else {
        gameOverMessage.classList.remove('d-none');
        gameOverMessageTwo.classList.remove('d-none');
        gameOverScore.classList.add('d-none');
        congratsMessage.classList.add('d-none');
        congratsMessageTwo.classList.add('d-none');
        congratsScreenScore.classList.remove('d-none');
    }
    
    ctx.drawImage(bgCity, 0, 400);
    ctx.drawImage(bgCity, 820, 400);
    
    intervalId = requestAnimationFrame(drawGameOverScreen);
}

