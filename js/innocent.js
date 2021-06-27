function drawInnocent() {
    innocents.forEach((elem, index) => {
        ctx.drawImage(innocent, innocents[index].x, innocents[index].y)
        innocents[index].y += medPackSpeed;

        if (innocents[index].y > canvas.height || innocents[index].status === 0) {
            innocents[index] = {
                x: Math.floor(Math.random() * (canvas.width - 200)), 
                y: -2500,
                status: 1
            }   
        }

        if (pickedHero === 'boyGreen') {
            pickUpInnocent(boyGreen, index);
        } else if (pickedHero === 'boyPurple') {
            pickUpInnocent(boyPurple, index);
        } else if (pickedHero === 'girlPink') {
            pickUpInnocent(girlPink, index);
        } else if (pickedHero === 'girlYellow') {
            pickUpInnocent(girlYellow, index);
        }
    })
}

function pickUpInnocent(character, index) {
    if (innocents[index].x + innocent.width >= positionX && innocents[index].x <= positionX + character.width && innocents[index].y + innocent.height >= positionY && innocents[index].y <= positionY + character.height) {
        innocents[index].status = 0; 
        mobSpeed += 1;
        innocentCatch++;
        controlSpeed += 1;
        score += 50;
        medPackSpeed += 2;
        innocentSaveAudio.play();
    }
}