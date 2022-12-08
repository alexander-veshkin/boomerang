class Enemy {
  constructor(args) {
    this.generateSkin();
    this.positionX = 20;
    this.positionY = 0;
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    const myTimer = setInterval(() => {
      if (this.positionX === 0) clearInterval(myTimer); // || this.isDead === true
      this.positionX -= 1;
    }, 200);
  }

  die() {
    this.positionX += 7;
    this.generateSkin();
  }
}

module.exports = Enemy;
