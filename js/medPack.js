function drawMedPack() {
    for (let i = 0; i < meds.length; i++) {
        ctx.drawImage(medPack, meds[i].x, meds[i].y)
        meds[i].y += medPackSpeed;

        if (meds[i].y > canvas.height || meds[i].status === 0) {
            meds[i] = {
                x: Math.floor(Math.random() * (canvas.width - 200)), 
                y: -2500,
                status: 1
            }   
        }

        if (pickedHero === 'boyGreen') {
            if (meds[i].x + medPack.width >= positionX && meds[i].x <= positionX + boyGreen.width) {
                if (meds[i].y + medPack.height >= positionY && meds[i].y <= positionY + boyGreen.height) {
                    meds[i].status = 0;
                    score += 50;
                    heroHealAudio.play();

                    if (heroHp <= 80) {
                        heroHp += 20;
                    } else {
                        heroHp = 100;
                    }
                }
            }
        } else if (pickedHero === 'boyPurple') {
            if (meds[i].x + medPack.width >= positionX && meds[i].x <= positionX + boyGreen.width) {
                if (meds[i].y + medPack.height >= positionY && meds[i].y <= positionY + boyGreen.height) {
                    meds[i].status = 0;
                    score += 50;
                    heroHealAudio.play();
                    
                    if (heroHp <= 80) {
                        heroHp += 20;
                    } else {
                        heroHp = 100;
                    }
                }
            }
        } else if (pickedHero === 'girlPink') {
            if (meds[i].x + medPack.width >= positionX && meds[i].x <= positionX + boyGreen.width) {
                if (meds[i].y + medPack.height >= positionY && meds[i].y <= positionY + boyGreen.height) {
                    meds[i].status = 0;
                    score += 50;
                    heroHealAudio.play();
                    
                    if (heroHp <= 80) {
                        heroHp += 20;
                    } else {
                        heroHp = 100;
                    }
                }
            }
        } else if (pickedHero === 'girlYellow') {
            if (meds[i].x + medPack.width >= positionX && meds[i].x <= positionX + boyGreen.width) {
                if (meds[i].y + medPack.height >= positionY && meds[i].y <= positionY + boyGreen.height) {
                    meds[i].status = 0;
                    score += 50;
                    heroHealAudio.play();
                    
                    if (heroHp <= 80) {
                        heroHp += 20;
                    } else {
                        heroHp = 100;
                    }
                }
            }
        }
    }
}