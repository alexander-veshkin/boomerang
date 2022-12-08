// Наш герой.

class Hero {
  constructor(args) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = args.position || 0;
    this.boomerang = args.boomerang;
    this.score = 0;
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
    if (this.position === this.boomerang.position) this.boomerang.fly(game);
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    console.log(`YOUR SCORE IS ${this.score}`);
    process.exit();
  }
}

module.exports = Hero;
