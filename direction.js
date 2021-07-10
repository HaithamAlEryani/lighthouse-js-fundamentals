const finalPosition = function (moves) {


  let x = 0;
  let y = 0;

  for (const move of moves) {
    switch (move) {
    case "north": y++; break;
    case "west": x--; break;
    case "east": x++; break;
    case "south": y--; break;
    default: break;
    }
  }

  return [x, y];

}
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);

