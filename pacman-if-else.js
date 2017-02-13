var powerPelleEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelleEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelleEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze');
