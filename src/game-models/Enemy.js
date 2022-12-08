class Enemy {
  constructor(args) {
    this.generateSkin();
    this.position = args.position || 10;
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    const myTimer = setInterval(() => {
      if (this.position === 0 || this.isDead === true) clearInterval(myTimer);
      this.position -= 1;
    }, 200);
  }

  die() {
    this.position += 5;
    this.generateSkin();
  }
}

module.exports = Enemy;
