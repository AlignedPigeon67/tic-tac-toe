/* gameBoard module */
const gameBoard = (() => {
    const board = new Array(9);

    const addToBoard = (marker, arrayIndex) => {
        if (board[arrayIndex] !== undefined) return;
        board.splice(arrayIndex, 1, marker);
        displayController.render(board);
    };
    const getBoard = () => { return board };

    return {addToBoard, getBoard};
})();

/* displayController module */
const displayController = (() => {
    let dataCells = document.querySelectorAll('[data-cell]');
    let markerIsX = true;

    document.addEventListener('click', e => {
        const cellNumber = e.target.getAttribute('data-cell');

        switch (cellNumber) {
            case '0':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', );
                switchMarker();
                break;
            case '1':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '2':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '3':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '4':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '5':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '6':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '7':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
            case '8':
                gameBoard.addToBoard(markerIsX ? 'x' : 'o', cellNumber);
                switchMarker();
                break;
        }
    });

    const render = (inputArray) => {
        for (let i = 0; i < dataCells.length; i++) {
            if (inputArray[i] === undefined) continue;
            dataCells[i].innerHTML = inputArray[i];
        }
    };
    const switchMarker = () => {
        markerIsX = markerIsX ? false : true;
    };

    return {render};
})();

gameController = (() => {
    let playerXTurn = true;
})();

/* Player factory */
const Player = (name, marker) => {
    let markerCount = 0;

    const getName = () => name;
    const getMarker = () => marker;
    const getMarkerCount = () => { return markerCount };

    return {getName, getMarker, getMarkerCount};
};