// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const readline = require('readline');
const { User } = require('../db/models');

const rl = readline.createInterface(process.stdin, process.stdout);

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.

const keyboard = {
  w: (game) => game.hero.moveUp(),
  s: (game) => game.hero.moveDown(),
  a: (game) => game.hero.moveLeft(),
  d: (game) => game.hero.moveRight(),
  space: (game) => game.hero.attack(game),
};

// Какая-то функция.

function runInteractiveConsole(game) {
  process.stdin.on('keypress', (ch, key) => {
    // Вызывает команду, соответствующую нажатой кнопке.
    if (key.name in keyboard) {
      keyboard[key.name](game);
    }
    // Прерывание программы.
    if (key.ctrl && key.name === 'c') {
      process.exit();
    }
  });
  process.stdin.setRawMode(true);
}

function registration() {
  return new Promise((res, rej) => {
    rl.on('line', async (input) => {
      await User.findOrCreate({ where: { nickname: `${input}` } });
      const nick = await User.findOne({ where: { nickname: `${input}` } });
      res(nick);
    });
  });
}

module.exports = { runInteractiveConsole, registration };
