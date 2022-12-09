const chalk = require('chalk');
const { User, Score } = require('../db/models');

// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(game) {
    // Тут всё рисуем.
    const log = console.log;
    console.clear();
    game.tracks.forEach((track) => {
      log(chalk.white.bgGreenBright.bold(' 🏡 ' + track.join('') + ' ⛰ '));
    });

    log('\n');
    log(`   Level: ${game.level}  `);
    log(chalk.white.bgMagentaBright.bold(`   Enemies killed: ${game.hero.score}   `));
    log(chalk.green(`   Time: ${game.hero.formatTime(game.hero.time)}   `));
  }

  async renderStats() {
    const log = console.log;
    const top10 = await Score.findAll({
      limit: 10,
      include: User,
      raw: true,
      order: [['score', 'DESC']],
    });
    log(chalk.white.bgGreenBright.bold('       TOP 10        '));
    log('=====================');
    log(chalk.white.bgBlueBright.bold('nickname, score, time'));
    log('=====================');
    top10.forEach((el) => log(`${el['User.nickname']}, ${el.score}, ${el.time}`));
  }
}

module.exports = View;
