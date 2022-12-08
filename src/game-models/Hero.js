// Наш герой.

class Hero {
  constructor(args) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = args.position || 0;
    this.boomerang = args.boomerang;
  }

  moveLeft() {
    // Идём влево.
    if (this.position === 0) return;
    if (this.position === this.boomerang.position) this.boomerang.position -= 1;
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    if (this.position === this.boomerang.position) this.boomerang.position += 1;
    this.position += 1;
  }

  attack(game) {
    // Атакуем.
    this.boomerang.fly(game);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
