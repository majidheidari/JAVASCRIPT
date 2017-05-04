const tetrisManager = new TetrisManager(document);
const localPlayer = tetrisManager.createPlayer();
localTetris.element.classList.add('local');
localTetris.run();

const connectionManager = new ConnectionManager(tetrisManager);
connectionManager.connect


const keyListener = (event) => {
    [
        [65, 68, 87, 69, 83],
        [37, 39, 38, 73, 40],
    ].forEach((key, index) => {
        const player = localPlayer.player;
        if (event.type === 'keydown') {
            if (event.keyCode === key[0]) {
                player.move(-1);
            } else if (event.keyCode === key[1]) {
                player.move(1);
            } else if (event.keyCode === key[2]) {
                player.rotate(-1);
            } //else if (event.keyCode === key[3]) {
              //  player.rotate(1);
          //  }
        }

        if (event.keyCode === key[4]) {
            if (event.type === 'keydown') {
                if (player.dropInterval !== player.DROP_FAST) {
                    player.drop();
                    player.dropInterval = player.DROP_FAST;
                }
            } else {
                player.dropInterval = player.DROP_SLOW;
            }
        }
    });
};

document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
