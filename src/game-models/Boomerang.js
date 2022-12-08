// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
    this.range = 5;
  }

  fly(game) {
    this.startPosition = this.position;
    let direction = 'right';

    const myTimer = setInterval(() => {
      if (this.position === this.startPosition + 5 || this.position === game.enemy.position) {
        direction = 'left';
      }

      if (this.startPosition <= this.position && direction === 'right') {
        this.moveRight();
      }

      if (this.startPosition < this.position && direction === 'left') {
        this.moveLeft();
      }

      if (this.position === this.startPosition) {
        clearInterval(myTimer);
      }
    }, 50);
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }
}

module.exports = Boomerang;
