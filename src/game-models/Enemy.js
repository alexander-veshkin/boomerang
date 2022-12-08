class Enemy {
  constructor(args = {}) {
    this.generateSkin();
    this.positionX = args.positionX || 20;
    this.positionY = args.positionY || 0;
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft(game) {
    const myTimer = setInterval(() => {
      if (this.positionX === 0) clearInterval(myTimer); // || this.isDead === true
      // if (game.hero.boomerang.positionX === this.positionX) this.die(game);
      this.positionX -= 1;
    }, 200);
  }

  die(game) {
    const enemyToDie = game.enemies.indexOf(this);
    game.enemies.splice(enemyToDie, 1);
    game.hero.score += 1;
  }
}

module.exports = Enemy;
