// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(game) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    game.tracks.forEach((track) => {
      console.log(track.join(''));
    });
    console.log('\n\n');
    console.log(`Enemies killed: ${game.hero.score}`);
  }
}

module.exports = View;
