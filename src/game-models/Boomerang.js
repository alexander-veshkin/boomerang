// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor() {
    this.skin = '🌀';
    this.position = 0;
  }

  async fly(num) {
    this.moveRight(num);
    setTimeout(() => {
      this.moveLeft(num);
    }, num * 100);
  }

  moveRight(num) {
    // Идём вправо.
    let i = 0;
    const myTimer = setInterval(async () => {
      if (i === num) clearInterval(myTimer);
      this.position += 1;
      i += 1;
    }, 100);
  }

  moveLeft(num) {
    // Идём влево.
    let i = 0;
    const myTimer = setInterval(async () => {
      if (i === num) clearInterval(myTimer);
      this.position -= 1;
      i += 1;
    }, 100);
  }
}

module.exports = Boomerang;
