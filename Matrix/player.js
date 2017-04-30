const matrix = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0],
];


function playerDrop() {
  player.pos.y++;
  if (collide(arena, player)){
    player.pos.y--;
    merge(arena, player);
    player.pos.y = 0;
  }
  dropCounter = 0;
}
function playerMove(dir) {
  player.pos.x += dir;
  if(collide(arena, player)) {
    player.pos.x -= dir;
  }

}


const player = {
  pos: {x: 5, y: 5},
  matrix : matrix,
}

document.addEventListener('keydown', event => {
  if ( event.keyCode === 37) { // lave tlacidlo
    playerMove(-1);
  } else if (event.keyCode === 39) {
    playerMove(1);
  } else if (event.keyCode === 40) {
    playerDrop();
  }
});
