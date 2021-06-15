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
    ctx.drawImage(magic, magics.x, magics.y)
    magics.y -= 8;

    if (magics.y < 0) {
        isFired = false;
        magics = {
            x: (positionX + 35), 
            y: (positionY - 10)
        }
    }
}