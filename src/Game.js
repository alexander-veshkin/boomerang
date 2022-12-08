// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor() {
    this.trackLength = 30;
    this.hero = new Hero({ position: 0, boomerang: new Boomerang() });
    this.enemies = [new Enemy()];
    this.view = new View();
    this.tracks = [[], [], [], [], []];
    this.regenerateTrack();
    this.enemies[0].moveLeft(this);
    this.generateEnemies();
  }

  generateEnemies() {
    setInterval(() => {
      const randomX = Math.floor(Math.random() * 10 + 20);
      const randomY = Math.floor(Math.random() * 5);
      const newEnemy = new Enemy({ positionX: randomX, positionY: randomY });
      this.enemies.push(newEnemy);
      newEnemy.moveLeft(this);
    }, 2000);
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.tracks = this.tracks.map(() => new Array(this.trackLength).fill('  '));
    this.tracks[this.hero.boomerang.positionY][this.hero.boomerang.positionX] = this.hero.boomerang.skin;
    this.tracks[this.hero.positionY][this.hero.positionX] = this.hero.skin;
    this.enemies.forEach((enemy) => {
      this.tracks[enemy.positionY][enemy.positionX] = enemy.skin;
    });
  }

  check() {
    const deadlyEnemy = this.enemies.find((enemy) => (this.hero.positionX === enemy.positionX
    && this.hero.positionY === enemy.positionY)
    || enemy.positionX === 0);

    if (deadlyEnemy) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.view.render(this);
      this.check();
    }, 10);
  }
}

module.exports = Game;
