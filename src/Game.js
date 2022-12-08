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
    this.enemy = new Enemy();
    this.view = new View();
    this.tracks = [[], [], [], [], []];
    this.regenerateTrack();
    // this.enemy.moveLeft();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.tracks = this.tracks.map(() => new Array(this.trackLength).fill('  '));
    this.tracks[this.hero.boomerang.positionY][this.hero.boomerang.positionX] = this.hero.boomerang.skin;
    this.tracks[this.hero.positionY][this.hero.positionX] = this.hero.skin;
    this.tracks[this.enemy.positionY][this.enemy.positionX] = this.enemy.skin;
  }

  check() {
    if (this.hero.positionX === this.enemy.positionX
    && this.hero.positionY === this.enemy.positionY) {
      this.hero.die();
    }
    if (this.hero.boomerang.positionX === this.enemy.positionX
    && this.hero.boomerang.positionY === this.enemy.positionY
    && this.hero.boomerang.killable) {
      this.enemy.die();
      this.hero.score += 1;
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.view.render(this.tracks);
      this.check();
    }, 10);
  }
}

module.exports = Game;
