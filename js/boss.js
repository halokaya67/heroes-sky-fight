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

        if (isFired && magics.x <= bosses[i].x + boss.width && magics.x + magic.width >= bosses[i].x) {
            if (magics.y <= bosses[i].y + boss.height && magics.y + magic.height >= bosses[i].y) {
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
    ctx.fillRect(150, 70, (bossHp * 10), 30);

    ctx.font = 'bolder 44px Annie Use Your Telescope';
    ctx.fillText(`Very Bad Crazy Vision`, 475, 50);
    ctx.closePath();
}

function drawFireballCollision() {
    for (let i = 0; i <fires.length; i++) {
        ctx.drawImage(fire, fires[i].x, fires[i].y)
        fires[i].y += bossFireSpeed;
        fireballAudio.play();

        if (fires[i].y > canvas.height || fires[i].status === 0) {
            fires[i] = {
                x: Math.floor(Math.random() * (canvas.width - 200)),
                y: -Math.floor(Math.random() * 100) - 950,
                status: 1
            }
        }

        if (pickedHero === 'boyGreen') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + boyGreen.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + boyGreen.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;                         heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'boyPurple') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + boyPurple.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + boyPurple.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'girlPink') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + girlPink.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + girlPink.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } else if (pickedHero === 'girlYellow') {
            if (fires[i].x + fire.width >= positionX && fires[i].x <= positionX + girlYellow.width) {
                if (fires[i].y + fire.height >= positionY && fires[i].y <= positionY + girlYellow.height) {
                    if (heroHp > 0) {
                        heroHp -= 50;
                        fires[i].status = 0;
                        heroHurtAudio.play();
                    }
                }
            }
        } 
    }
}