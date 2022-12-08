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
    this.position -= 1;
    this.boomerang.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
    this.boomerang.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly(10);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
