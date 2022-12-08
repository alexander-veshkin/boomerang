// Враг.

class Enemy {
  constructor(args) {
    this.generateSkin();
    this.position = args.position || 10;
    this.isDead = false;
  }

  generateSkin() {
    const skins = ['👾', '👹', '👻', '👽', '👿', '💩', '🤡', '🤺', '🧛', '🧟', '🎃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    const myTimer = setInterval(() => {
      if (this.position === 0 || this.isDead === true) clearInterval(myTimer);
      this.position -= 1;
    }, 100);
  }

  die() {
    // this.position = -1;
    this.skin = '💀';
    this.isDead = true;
  }
}

module.exports = Enemy;
