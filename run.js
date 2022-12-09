// Основной файл.
// Запускает игру.
const Game = require('./src/Game');
const { runInteractiveConsole, registration } = require('./src/keyboard');

// Инициализация игры с настройками.
const game = new Game();

// Запуск игры.

async function run() {
  console.log('Enter your nickname:');
  const nick = await registration();
  game.view.render(game);
  setTimeout(() => {
    runInteractiveConsole(game);
    game.play(nick);
  }, 1000);
}

run();
