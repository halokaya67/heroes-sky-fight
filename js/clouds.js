function drawClouds() {
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
}