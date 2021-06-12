# Heroes Sky Fight


## Description
Avenger's Sky Fight is an arcade game in which the player is trying to avoid or kill the enemies and  catch the innocents falling down. The player needs to move horizontally to do all those things mentioned above. Also sometimes there will be med-packs on the screen to heal the player. After killing or avoiding certain amount of enemies there will a boss attacking the player. In order to finish the game the player needs to kill 3 bosses.


## MVP (DOM - Canvas)
- There will be a charecter moving horizontally.
- There will be enemies coming down from top of the screen in random positions.
- After avoiding 3 enemies an innocent will fall down from top of the screen randomly.
- A boss will come and start fighting after the player saves 3 innocents.
- If the player misses 3 innocents or hit by enemies until the hp is 0, the game will be over.


## Backlog
- There will be a scoreboard. If the hero choose to kill the enemies instead of avoiding the score will be diffrent.
- Some of the enemies will be attacking randomly.
- There will be an health bar for the player.
- There will be an health bar for every each of the bosses.
- There will be randomly showing up med-packs healing the player.
- After every boss the game will be harder.
- There will be different heroes to pick on the splash screen.


## Data structure
# main.js
- buildSplashScreen() {}
- buildGameScreen() {}
- buildGameOverScreen() {}

# game.js
- drawCanvas() {}
- startLoop() {}
- checkCollisions() {}
- addEnemy() {}
- addInnocent() {}

# characters.js
- draw() {}
- move() {}
- shoot() {}
- chechScreenCollision() {}

# enemy.js
- draw() {}
- move() {}

# innocent.js
- draw() {}
- move() {}

# med-pack.js
- draw() {}
- move() {}


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen


## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - drawCanvas
- enemy - draw
- enemy - move
- characters - draw
- characters - move
- characters - shoot
- characters - chechScreenCollision
- innocent - draw
- innocent - move
- med-pack - draw
- med-pack - move
- game - checkCollision
- game - addEventListener


## Additional Links


### Trello
[Link url](https://trello.com)


### Slides
[Link Slides.com](http://slides.com)