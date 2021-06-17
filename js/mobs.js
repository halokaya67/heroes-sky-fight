function drawMobs() {
    for (let i = 0; i < mobs.length; i++) {
        ctx.drawImage(mob, mobs[i].x, mobs[i].y)
        mobs[i].y += mobSpeed;

        if (mobs[i].y > canvas.height || mobs[i].status === 0) {
            mobs[i] = {
                x: Math.floor(Math.random() * (canvas.width - 200)),
                y: -Math.floor(Math.random() * 1000),
                status: 1
            }   
        }

        if (pickedHero === 'boyGreen') {
            if (mobs[i].x + mob.width >= positionX && mobs[i].x <= positionX + boyGreen.width) {
                if (mobs[i].y + mob.height >= positionY && mobs[i].y <= positionY + boyGreen.height) {
                    if (heroHp > 0) {
                        heroHp -= 20;
                        mobs[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'boyPurple') {
            if (mobs[i].x + mob.width >= positionX && mobs[i].x <= positionX + boyPurple.width) {
                if (mobs[i].y + mob.height >= positionY && mobs[i].y <= positionY + boyPurple.height) {
                    if (heroHp > 0) {
                        heroHp -= 20;
                        mobs[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'girlPink') {
            if (mobs[i].x + mob.width >= positionX && mobs[i].x <= positionX + girlPink.width) {
                if (mobs[i].y + mob.height >= positionY && mobs[i].y <= positionY + girlPink.height) {
                    if (heroHp > 0) {
                        heroHp -= 20;
                        mobs[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'girlYellow') {
            if (mobs[i].x + mob.width >= positionX && mobs[i].x <= positionX + girlYellow.width) {
                if (mobs[i].y + mob.height >= positionY && mobs[i].y <= positionY + girlYellow.height) {
                    if (heroHp > 0) {
                        heroHp -= 20;
                        mobs[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } 
        
        if (isFired && magics.x <= mobs[i].x + mob.width && magics.x + magic.width >= mobs[i].x) {
            if (magics.y <= mobs[i].y + mob.height && magics.y + magic.height >= mobs[i].y) {
                mobs[i].status = 0;
                magics.status = 0;
                mobsCollusionAudio.play();
                score += 20
            }
        }
    }
}''