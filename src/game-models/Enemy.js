const player = require('node-wav-player');

class Enemy {
  constructor(args = {}) {
    this.generateSkin();
    this.positionX = args.positionX || 20;
    this.positionY = args.positionY || 0;
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🧛', '🧟', '🎃', '🤖', '🥷', '👮'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft(game) {
    const myTimer = setInterval(() => {
      if (this.positionX === 0) clearInterval(myTimer);
      this.positionX -= 1;
    }, 220 - game.level * 20);
  }

  die(game) {
    player.play({
      path: './src/sounds/enemy_death.wav',
    });
    const enemyToDie = game.enemies.indexOf(this);
    game.enemies.splice(enemyToDie, 1);
    game.hero.score += 1;
  }
}

module.exports = Enemy;
