function shuffle() {
  const animals = [
    'bear.jpg',
    'cat.jpg',
    'chameleon.jpg',
    'monkey.jpg',
    'owl.jpg',
    'sloth.jpg',
    'squirrel.jpg',
    'toad.jpg',
    'turtle.jpg',
  ];

  animals.sort(function () {
    return Math.random() - 0.5;
  });

  const elements = document.getElementsByClassName('animal');

  for (var i = 0; i < elements.length; i++) {
    elements.item(i).style.backgroundImage = `url(./jpg/${animals[i]})`;
  }
}

window.onload = shuffle();
