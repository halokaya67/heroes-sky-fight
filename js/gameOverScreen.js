function drawGameOverScreen() {
    gameOverContent.classList.remove('d-none');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.setAttribute('height', 600);

    ctx.drawImage(bg, 0, 0);

    for (let i = 0; i < clouds.length; i++) {
        ctx.drawImage(bgCloud, clouds[i].x, clouds[i].y);
        clouds[i].x -= 1;

        if (clouds[i].x + bgCloud.width < 0) {
            clouds[i] = {
                x: 1300,
                y: Math.floor(Math.random() * (canvas.height - 200))
            }
        }
    }
    
    counter++;    

    if (isWon === true) {
        gameOverMessage.classList.add('d-none');
        gameOverMessageTwo.classList.add('d-none');
        gameOverScore.classList.add('d-none');
        congratsMessage.classList.remove('d-none');
        congratsMessageTwo.classList.remove('d-none');
        congratsScreenScore.classList.remove('d-none');
        congratsScreenAudio.play();
        congratsScreenAudio.volume = 0.05;

        if (counter === 1) {
            updateHighScores();
            congratsScreenClap.play();
            congratsScreenClap.volume = 0.05;
        }
    } else {
        gameOverMessage.classList.remove('d-none');
        gameOverMessageTwo.classList.remove('d-none');
        gameOverScore.classList.add('d-none');
        congratsMessage.classList.add('d-none');
        congratsMessageTwo.classList.add('d-none');
        congratsScreenScore.classList.remove('d-none');
        gameOverScreenAudio.play();
        gameOverScreenAudio.volume = 0.05;

        if (counter === 1) {
            updateHighScores();
            gameOverScreenRetro.play();
            gameOverScreenRetro.volume = 0.05;
        }
    }
    
    ctx.drawImage(bgCity, 0, 400);
    ctx.drawImage(bgCity, 820, 400);

    bossBattleAudio.pause();
    gameScreenAudio.pause();
    
    intervalId = requestAnimationFrame(drawGameOverScreen);
}

function updateHighScores() {
    let name;
    if (score > highscores[0].score) {
        name = prompt("Cool! That's a new high score people! Let us know your name fighter?");
        highscores.splice(0, 0 , {
            name: name.slice(0, 7).toUpperCase(),
            score: score
        });
        highscores.pop();
    } else if (score > highscores[1].score) {
        name = prompt("Cool! That's a new high score people! Let us know your name fighter?");
        highscores.splice(1, 0 , {
            name: name.slice(0, 7).toUpperCase(),
            score: score
        });
        highscores.pop();
    } else if (score > highscores[2].score) {
        name = prompt("Cool! That's a new high score people! Let us know your name fighter?");
        highscores.splice(2, 0 , {
            name: name.slice(0, 7).toUpperCase(),
            score: score
        });
        highscores.pop();
    } else if (score > highscores[3].score) {
        name = prompt("Cool! That's a new high score people! Let us know your name fighter?");
        highscores.splice(3, 0 , {
            name: name.slice(0, 7).toUpperCase(),
            score: score
        });
        highscores.pop();
    }

    highScoreList.innerHTML = ''

    highscores.forEach((elem) => {
        let li = document.createElement('li');
        li.innerHTML = `${elem.name} - ${elem.score}`;
        highScoreList.appendChild(li);
    })
}