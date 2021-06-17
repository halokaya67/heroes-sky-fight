function drawHeroes() {
    if (pickedHero === 'boyGreen') {
        ctx.drawImage(boyGreen, positionX, positionY)
    } else if (pickedHero === 'boyPurple') {
        ctx.drawImage(boyPurple, positionX, positionY)
    } else if (pickedHero === 'girlPink') {
        ctx.drawImage(girlPink, positionX, positionY)
    } else if (pickedHero === 'girlYellow') {
        ctx.drawImage(girlYellow, positionX, positionY)
    }
}

function moveHeroes() {
    if (isLeft && positionX > 0) {
        positionX -= controlSpeed;
    } else {
        if (isRight && pickedHero === 'boyGreen' && positionX + boyGreen.width < canvas.width) {
            positionX += controlSpeed;
        } else if (isRight && pickedHero === 'boyPurple' && positionX + boyPurple.width < canvas.width) {
            positionX += controlSpeed;
        } else if (isRight && pickedHero === 'girlPink' && positionX + girlPink.width < canvas.width) {
            positionX += controlSpeed;
        } else if (isRight && pickedHero === 'girlYellow' && positionX + girlYellow.width < canvas.width) {
            positionX += controlSpeed;
        }
    }
}

function drawMagic() {
    if (isFired) {
        ctx.drawImage(magic, magics.x, magics.y)
        magicFireAudio.play();
        magics.y -= 20;
    }

    if (magics.y < 0 || magics.status === 0) {
        isFired = false;
    }
}

function drawHeroHp() {
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
    ctx.fillRect(20, 130, (heroHp * 2), 30);

    ctx.font = 'bolder 44px Annie Use Your Telescope';
    ctx.fillText(`Score: ${score}`, 20, 200);
    ctx.closePath();
}