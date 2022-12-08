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
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero({ position: 0, boomerang: new Boomerang() }); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy({ position: 20 });
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill('  ');
    this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    this.track[this.hero.position] = this.hero.skin;
    this.enemy.moveLeft();
    this.track[this.enemy.position] = this.enemy.skin;
  }

  check() {
    if (this.enemy.skin === '💀') { // && this.hero.boomerang.position === this.hero.position
      console.log('YOU WIN!');
      process.exit();
    }
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
    if (this.hero.boomerang.position === this.enemy.position) {
      this.enemy.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.regenerateTrack();
      this.view.render(this.track);
      this.check();
    }, 100);
  }
}

module.exports = Game;
