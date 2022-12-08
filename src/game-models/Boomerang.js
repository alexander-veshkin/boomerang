// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.positionX = 0;
    this.positionY = 0;
    this.range = 5;
  }

  fly(game) {
    this.startPosition = this.positionX;
    this.killable = true;
    let direction = 'right';

    const myTimer = setInterval(() => {
      game.enemies.sort((a, b) => a.positionX - b.positionX);
      const enemyInLine = game.enemies.find((enemy) => enemy.positionY === this.positionY
      && enemy.positionX >= this.positionX);

      if (this.positionX === this.startPosition + 5) {
        direction = 'left';
      }

      if (enemyInLine
      && this.positionX === enemyInLine.positionX
      && this.killable) {
        enemyInLine.die(game);
        direction = 'left';
      }

      if (enemyInLine
      && this.positionX === enemyInLine.positionX - 1
      && this.killable) {
        this.moveRight();
        enemyInLine.die(game);
        direction = 'left';
      }

      if (this.startPosition <= this.positionX && direction === 'right') {
        this.moveRight();
      }

      if (this.startPosition < this.positionX && direction === 'left') {
        this.moveLeft();
      }

      if (this.positionX === this.startPosition
      || (this.positionX === game.hero.positionX && this.positionY === game.hero.positionY)) {
        this.killable = false;
        clearInterval(myTimer);
      }
    }, 50);
  }

  moveRight() {
    this.positionX += 1;
  }

  moveLeft() {
    this.positionX -= 1;
  }
}

module.exports = Boomerang;
