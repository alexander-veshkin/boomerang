const chalk = require('chalk');

// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(game) {
    // Тут всё рисуем.
    const log = console.log;
    console.clear();
    game.tracks.forEach((track) => {
      log(chalk.white.bgMagentaBright.bold(' 🏡 ' + track.join('🌲') + ' ⛰ '));
    });
    log('\n');
    log(chalk.white.bgMagentaBright.bold(`  Enemies killed: ${game.hero.score}   `));
    log(chalk.green(`  Time: ${game.hero.formatTime(game.hero.time)}   `));
  }
}

module.exports = View;
