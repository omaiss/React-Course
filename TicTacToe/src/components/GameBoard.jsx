const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  // const [gameBoard, setgameBoard] = useState(initialGameBoard);
  // function changeSymbol(rowIndex, colIndex) {
  //     setgameBoard((prevGameBoard) => {
  //         const updateBoard = [...prevGameBoard.map(innderArray => [...innderArray])];
  //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updateBoard;
  //     }
  //     );
  //     onSelectSquare();
  // }

  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = { square };
    gameBoard[row][col] = player;
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                    {symbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
