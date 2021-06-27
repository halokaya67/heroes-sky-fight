function drawMobs() {
    mobs.forEach((elem, index) => {
        ctx.drawImage(mob, mobs[index].x, mobs[index].y)
        mobs[index].y += mobSpeed;

        if (mobs[index].y > canvas.height || mobs[index].status === 0) {
            mobs[index] = {
                x: Math.floor(Math.random() * (canvas.width - 200)),
                y: -Math.floor(Math.random() * 100) - 950,
                status: 1
            }   
        }

        if (pickedHero === 'boyGreen') {
            gettingHitByMobs(boyGreen, index)
        } else if (pickedHero === 'boyPurple') {
            gettingHitByMobs(boyPurple, index)
        } else if (pickedHero === 'girlPink') {
            gettingHitByMobs(girlPink, index)
        } else if (pickedHero === 'girlYellow') {
            gettingHitByMobs(girlYellow, index)
        } 
        
        if (isFired && magics.x <= mobs[index].x + mob.width && magics.x + magic.width >= mobs[index].x && magics.y <= mobs[index].y + mob.height && magics.y + magic.height >= mobs[index].y) {
            mobs[index].status = 0;
            magics.status = 0;
            enemyHurtAudio.play();
            score += 20
        }
    })
}

function gettingHitByMobs(character, index) {
    if (mobs[index].x + mob.width >= positionX && mobs[index].x <= positionX + character.width && mobs[index].y + mob.height >= positionY && mobs[index].y <= positionY + character.height && heroHp > 0) {
        heroHp -= 20;
        mobs[index].status = 0;
        heroHurtAudio.play();
    }
}