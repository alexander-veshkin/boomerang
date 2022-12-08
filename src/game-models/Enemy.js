// Враг.

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
    // Идём влево.
    this.position -= 1;
  }

  die() {
    // this.position = -1;
    this.skin = '💀';
  }
}

module.exports = Enemy;
