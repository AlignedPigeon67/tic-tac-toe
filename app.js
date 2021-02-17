/* gameBoard module */
const gameBoard = (() => {
  const board = new Array(9);

  const addToBoard = (marker, arrayIndex) => {
    if (board[arrayIndex] !== undefined) return;
    board.splice(arrayIndex, 1, marker);
    displayController.render(board);
  };
  const getBoard = () => {
    return board;
  };

  return { addToBoard, getBoard };
})();

/* displayController module */
const displayController = (() => {
  let dataCells = document.querySelectorAll('[data-cell]');

  document.addEventListener('click', e => {
    const cellNumber = e.target.getAttribute('data-cell');

    switch (cellNumber) {
      case '0':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '1':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '2':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '3':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '4':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '5':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '6':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '7':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
      case '8':
        gameBoard.addToBoard(gameController.isPlayer1Turn() ? 'x' : 'o', cellNumber);
        gameController.switchPlayerTurn();
        break;
    }
  });

  const render = inputArray => {
    for (let i = 0; i < dataCells.length; i++) {
      if (inputArray[i] === undefined) continue;
      dataCells[i].innerHTML = inputArray[i];
    }
  };

  return { render };
})();

gameController = (() => {
  player1Turn = true;

  const isPlayer1Turn = () => {
    return player1Turn;
  };

  const switchPlayerTurn = () => {
    player1Turn = !player1Turn;
  };

  return { isPlayer1Turn, switchPlayerTurn };
})();

/* Player factory */
const Player = (name, marker) => {
  let markerCount = 0;

  const getName = () => name;
  const getMarker = () => marker;
  const getMarkerCount = () => {
    return markerCount;
  };

  return { getName, getMarker, getMarkerCount };
};
