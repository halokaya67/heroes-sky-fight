# Heroes Sky Fight

## Description

Heroes Sky Fight is an arcade game in which the player is trying to avoid or kill the enemies and catch the innocents falling down. The player needs to move horizontally to do all those things mentioned above. Also there will be med-packs on the screen to heal the player. After saving innocents a boss fight will occure. In order to finish the game, the player needs to kill the boss.

## MVP (DOM - Canvas)

- There will be a charecter moving horizontally.
- There will be enemies coming down from top of the screen in random positions.
- There will be an innocent falling down from top of the screen randomly.
- A boss will come and start fighting after the player saves 3 innocents.
- If the player hit by enemies until the hp is 0, the game will be over.

## Backlog

- There will be a scoreboard. If the hero choose to kill the enemies instead of avoiding the score will be diffrent.
- There will be an health bar for the player.
- There will be an health bar for the boss.
- There will be randomly showing up med-packs healing the player.
- After every hit the boss takes the game will be harder.
- There will be different heroes to pick on the splash screen.

## Data structure

# splashScreen.js
- drawSplashScreen() {}
- drawPickHeroScreen() {}

# gameScreen.js
- drawGameScreen() {}

# gameOverScreen.js
- drawGameOverScreen() {}

# clouds.js
- drawClouds() {}

# heroes.js
- drawHeroes() {}
- moveHeroes() {}
- drawMagic() {}

# mobs.js
- drawMobs() {}

# innocent.js
- drawInnocent() {}

# boss.js
- drawBossScreen() {}

# med-pack.js
- drawMedPack() {}

## States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- bossScreen
- gameoverScreen

## Task

- splashScreen - drawSplashScreen
- splashScreen - drawPickHeroScreen
- gameScreen - drawGameScreen
- gameOverScreen - drawGameOverScreen
- clouds - drawClouds
- heroes - drawHeroes
- heroes - moveHeroes
- mobs - drawMobs (Collision logic included)
- innocent - drawInnocent (Collision logic included)
- gameScreen - addEventListener
- boss - drawBossScreen (Collision logic included)
- medPack - drawMedPack (Collision logic included)
- heroes - drawMagic (Collision logic included)

## Additional Links

### Trello

[Link url](https://trello.com/invite/b/0nqj6SAM/155ea7af04f1f63e924490a10ae07938/heroes-sky-fight)

### Slides

[Link Slides.com](https://slides.com/d/1SlhaDI/live)
