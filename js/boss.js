function drawBossCollision() {
    for(let i = 0; i < bosses.length; i++) {
        ctx.drawImage(boss, bosses[i].x, bosses[i].y)
        bosses[i].x = bosses[i].x + bossSpeed;
        medPackSpeed = 3;

        if (bosses[i].x <= 0) {
            bossSpeed = -bossSpeed;
        } else if (bosses[i].x + boss.width >= canvas.width) {
            bossSpeed = -bossSpeed;
        }

        if (isFired && magics.x <= bosses[i].x + boss.width && magics.x + magic.width >= bosses[i].x && magics.y <= bosses[i].y + boss.height && magics.y + magic.height >= bosses[i].y) {
            magics.status = 0;
            score += 100;
            bossHp -= 20;
            bossFireSpeed += 1;
            medPackSpeed += 2;
            controlSpeed += 1;
            enemyHurtAudio.play();
                
            if (bossSpeed < 0) {
                bossSpeed -= 2;
            } else {
                bossSpeed += 2;
            }
        }
    }
}

function drawBossHp() {
    ctx.beginPath();
    if (bossHp <= 100 && bossHp > 75) {
        ctx.fillStyle = '#38b000';
    } else if (bossHp <= 75 && bossHp > 50) {
        ctx.fillStyle = '#f7b538';
    } else if (bossHp <= 50 && bossHp > 25) {
        ctx.fillStyle = '#d8572a';
    } else if (bossHp <= 25) {
        ctx.fillStyle = '#c32f27';
    }
    ctx.fillRect(250, 70, (bossHp * 10), 30);
    ctx.closePath();

    ctx.beginPath();
    ctx.font = 'bolder 44px Annie Use Your Telescope';
    ctx.fillStyle = '#4d194d';
    ctx.fillText(`Very Bad Crazy Vision`, 580, 50);
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = '#4d194d';
    ctx.lineWidth = 2;
    ctx.strokeRect(250, 70, 1000, 30);
    ctx.closePath();
}

function drawFireballCollision() {
    fires.forEach((elem, index) => {
        ctx.drawImage(fire, fires[index].x, fires[index].y)
        fires[index].y += bossFireSpeed;
        fireballAudio.play();

        if (fires[index].y > canvas.height || fires[index].status === 0) {
            fires[index] = {
                x: Math.floor(Math.random() * (canvas.width - 200)),
                y: -Math.floor(Math.random() * 100) - 950,
                status: 1
            }
        }

        if (pickedHero === 'boyGreen') {
            gettingHitByBoss(boyGreen, index)
        } else if (pickedHero === 'boyPurple') {
            gettingHitByBoss(boyPurple, index)
        } else if (pickedHero === 'girlPink') {
            gettingHitByBoss(girlPink, index)
        } else if (pickedHero === 'girlYellow') {
            gettingHitByBoss(girlYellow, index)
        } 
    })
}

function gettingHitByBoss(character, index) {
    if (fires[index].x + fire.width >= positionX && fires[index].x <= positionX + character.width && fires[index].y + fire.height >= positionY && fires[index].y <= positionY + character.height && heroHp > 0) {
        heroHp -= 50;
        fires[index].status = 0;                         
        heroHurtAudio.play();
    }
}