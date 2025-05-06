
export default function GameBoard({ onSelectSquare, board }) {
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

  
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((symbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={symbol !== null}
                  >
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
