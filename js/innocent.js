function drawInnocent() {
    for (let i = 0; i < innocents.length; i++) {
        ctx.drawImage(innocent, innocents[i].x, innocents[i].y)
        innocents[i].y += mobSpeed;

        if (innocents[i].y > canvas.height || innocents[i].status === 0) {
            innocents[i] = {
                x: Math.floor(Math.random() * (canvas.width - 200)), 
                y: -2500,
                status: 1
            }   
        }

        if (pickedHero === 'boyGreen') {
            if (innocents[i].x + innocent.width >= positionX && innocents[i].x <= positionX + boyGreen.width) {
                if (innocents[i].y + innocent.height >= positionY && innocents[i].y <= positionY + boyGreen.height) {
                    innocents[i].status = 0; 
                    mobSpeed = mobSpeed + 1;
                    count++;
                    controlSpeed = controlSpeed + 1;
                }
            }
        } else if (pickedHero === 'boyPurple') {
            if (innocents[i].x + innocent.width >= positionX && innocents[i].x <= positionX + boyGreen.width) {
                if (innocents[i].y + innocent.height >= positionY && innocents[i].y <= positionY + boyGreen.height) {
                    innocents[i].status = 0;
                    mobSpeed = mobSpeed + 1;
                    count++;
                    controlSpeed = controlSpeed + 1;
                }
            }
        } else if (pickedHero === 'girlPink') {
            if (innocents[i].x + innocent.width >= positionX && innocents[i].x <= positionX + boyGreen.width) {
                if (innocents[i].y + innocent.height >= positionY && innocents[i].y <= positionY + boyGreen.height) {
                    innocents[i].status = 0;
                    mobSpeed = mobSpeed + 1;
                    count++;
                    controlSpeed = controlSpeed + 1;
                }
            }
        } else if (pickedHero === 'girlYellow') {
            if (innocents[i].x + innocent.width >= positionX && innocents[i].x <= positionX + boyGreen.width) {
                if (innocents[i].y + innocent.height >= positionY && innocents[i].y <= positionY + boyGreen.height) {
                    innocents[i].status = 0;
                    mobSpeed = mobSpeed + 1;
                    count++;
                    controlSpeed = controlSpeed + 1;
                }
            }
        }
    }
}