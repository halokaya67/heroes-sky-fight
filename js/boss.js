function drawBossScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 950);
    ctx.drawImage(bg, 0, 0);

    drawClouds();

    drawHeroes();

    moveHeroes();
    
    if (isFired) {
        drawMagic();
    }

    for(let i = 0; i < bosses.length; i++) {
        ctx.drawImage(boss, bosses[i].x, bosses[i].y)
        bosses[i].x = bosses[i].x + incrX;
        if (bosses[i].x <= 0) {
            incrX = -incrX;
        } else if (bosses[i].x + boss.width >= canvas.width) {
            incrX = -incrX;
        }
    }

    for (let i = 0; i <fires.length; i++) {
        ctx.drawImage(fire, fires[i].x, fires[i].y)
        fires[i].y += 2;

        if (fires[i].y > canvas.height || fires[i].status === 0) {
            fires[i] = {
                x: Math.floor(Math.random() * (canvas.width - 200)),
                y: -2000,
                status: 1
            }
        }

        if (pickedHero === 'boyGreen') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + boyGreen.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + boyGreen.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                    }
                }
            }
        } else if (pickedHero === 'boyPurple') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + boyPurple.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + boyPurple.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                    }
                }
            }
        } else if (pickedHero === 'girlPink') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + girlPink.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + girlPink.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                    }
                }
            }
        } else if (pickedHero === 'girlYellow') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + girlYellow.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + girlYellow.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                    }
                }
            }
        } 
    }
    
    ctx.drawImage(bgCity, 0, 750);
    ctx.drawImage(bgCity, 820, 750);

    if (heroHp === 0) {
        isGameOver = true;
    }

    if (isGameOver || isWon) {
        cancelAnimationFrame(intervalId);
        drawGameOverScreen();
    } else {
        intervalId = requestAnimationFrame(drawBossScreen);
    }
}