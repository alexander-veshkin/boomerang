class Hero {
  constructor(args) {
    this.skin = '🤠';
    this.positionX = 0;
    this.positionY = 0;
    this.boomerang = args.boomerang;
    this.score = 0;
  }

  moveLeft() {
    if (this.positionX === 0) return;
    if (this.boomerangInHands()) this.boomerang.positionX -= 1;
    this.positionX -= 1;
  }

  moveRight() {
    if (this.positionX === 30) return;
    if (this.boomerangInHands()) this.boomerang.positionX += 1;
    this.positionX += 1;
  }

  moveUp() {
    if (this.positionY === 0) return;
    if (this.boomerangInHands()) this.boomerang.positionY -= 1;
    this.positionY -= 1;
  }

  moveDown() {
    if (this.positionY === 4) return;
    if (this.boomerangInHands()) this.boomerang.positionY += 1;
    this.positionY += 1;
  }

  attack(game) {
    if (this.boomerangInHands()) this.boomerang.fly(game);
  }

  boomerangInHands() {
    return this.positionX === this.boomerang.positionX
    && this.positionY === this.boomerang.positionY;
  }

  die() {
    this.skin = '💀';
    console.log('YOU ARE DEAD!💀');
    process.exit();
  }
}

module.exports = Hero;
