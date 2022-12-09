// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(game) {
    // Тут всё рисуем.
    console.clear();
    game.tracks.forEach((track) => {
      console.log(track.join(''));
    });
    console.log('\n\n');
    console.log(`Level: ${game.level}`);
    console.log(`Enemies killed: ${game.hero.score}`);
    console.log(`Time: ${game.hero.formatTime(game.hero.time)}`);
  }
}

module.exports = View;
