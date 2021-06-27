function drawMedPack() {
    meds.forEach((elem, index) => {
        ctx.drawImage(medPack, meds[index].x, meds[index].y)
        meds[index].y += medPackSpeed;

        if (meds[index].y > canvas.height || meds[index].status === 0) {
            meds[index] = {
                x: Math.floor(Math.random() * (canvas.width - 200)), 
                y: -2500,
                status: 1
            } 
        }

        if (pickedHero === 'boyGreen') {
            pickUpMedPack(boyGreen, index)
        } else if (pickedHero === 'boyPurple') {
            pickUpMedPack(boyPurple, index)
        } else if (pickedHero === 'girlPink') {
            pickUpMedPack(girlPink, index)
        } else if (pickedHero === 'girlYellow') {
            pickUpMedPack(girlYellow, index)
        }
    })
}

function pickUpMedPack(character, index) {
    if (meds[index].x + medPack.width >= positionX && meds[index].x <= positionX + character.width && meds[index].y + medPack.height >= positionY && meds[index].y <= positionY + character.height) {
        meds[index].status = 0;
        score += 50;
        heroHealAudio.play();

        if (heroHp <= 80) {
            heroHp += 20;
        } else {
            heroHp = 100;
        }
    }
}