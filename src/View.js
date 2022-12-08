// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(tracks) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    tracks.forEach((track) => {
      console.log(track.join(''));
    });
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }
}

module.exports = View;
