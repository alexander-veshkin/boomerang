const { Score } = require('../../db/models');
const chalk = require('chalk');

class Hero {
  constructor(args) {
    this.skin = '🤠';
    this.positionX = 0;
    this.positionY = 0;
    this.boomerang = args.boomerang;
    this.score = 0;
    this.time = 0;
    this.startTime = new Date().getTime();
    this.dead = false;
  }

  updateTime() {
    this.time = new Date().getTime() - this.startTime;
  }

  formatTime(time) {
    let sec = Math.floor(time / 1000);
    let min = Math.floor(sec / 60);
    let h = Math.floor(min / 24);
    sec %= 60;
    min %= 60;
    h %= 24;
    return `${h}:${min}:${sec}`;
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

  async die(game) {
    this.skin = '💀';
    this.dead = true;
    console.log(chalk.red.bold(`   💀YOU ARE DEAD💀\n   `));
    const gameTime = this.formatTime(this.time);
    try {
      await Score.upsert({ user_id: this.id, score: this.score, time: gameTime });
    } catch (error) {}
    await game.view.renderStats();
    process.exit();
  }
}

module.exports = Hero;
