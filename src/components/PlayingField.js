import { useState } from "react";
import ShuffleButton from "./ShuffleButton.js"
import Modal from "./Modal.js";

const generateBoard = (numRows, numColumns) => {
  const totalCells = numRows * numColumns;
  const numbers = Array.from({ length: totalCells - 1 }, (_, index) => index + 1);

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const emptyCellIndex = totalCells - 1;

  const gridData = [];
  let counter = 0;

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numColumns; j++) {
      if (counter === emptyCellIndex) {
        row.push('');
      } else {
        row.push(numbers[counter++]);
      }
    }
    gridData.push(row);
  }
  return gridData
}

const PlayingField = ({ numRows, numColumns }) => {
  const [board, setBoard] = useState(() => generateBoard(numRows, numColumns));
  const [isOpen, setIsOpen] = useState(false);
  const [counter, setCounter] = useState(1);

  const shuffleBoard = () => {
    setBoard(generateBoard(numRows, numColumns));
  }

  // TODO: Handle moving more than one cell at a time
  const handleMovingCells = (row, column) => {
    const emptyRowIndex = board.findIndex(row => row.includes(''));
    const emptyColumnIndex = board[emptyRowIndex].indexOf('');

    if ((Math.abs(row - emptyRowIndex) === 1 && column === emptyColumnIndex) ||
      (Math.abs(column - emptyColumnIndex) === 1 && row === emptyRowIndex)) {
      const newBoard = [...board];

      if (emptyColumnIndex < column && emptyRowIndex === row) {
        //console.log('left');
        for (let c = emptyColumnIndex; c < column; c++) {
          [newBoard[row][c], newBoard[row][c + 1]] = [newBoard[row][c + 1], newBoard[row][c]];
        }
      }

      else if (emptyColumnIndex > column && emptyRowIndex === row) {
        //console.log('right');
        for (let c = emptyColumnIndex; c > column; c--) {
          [newBoard[row][c], newBoard[row][c - 1]] = [newBoard[row][c - 1], newBoard[row][c]];
        }
      }
      else if (emptyRowIndex > row && emptyColumnIndex === column) {
        //console.log('down');
        for (let r = emptyRowIndex; r > row; r--) {
          [newBoard[r][column], newBoard[r - 1][column]] = [newBoard[r - 1][column], newBoard[r][column]];
        }
      }
      else if (emptyRowIndex < row && emptyColumnIndex === column) {
        //console.log('up');
        for (let r = emptyRowIndex; r < row; r++) {
          [newBoard[r][column], newBoard[r + 1][column]] = [newBoard[r + 1][column], newBoard[r][column]];
        }
      }

      setBoard(newBoard);
    }

    if (isWinningState()) {
      console.log('Winning')
      setIsOpen(true)
    }
  }

  /*   const movesCounter = () => {
      setCounter(counter => counter + 1)
      console.log('Moves:', counter)
    } */

  const isWinningState = () => {
    const flatBoard = board.flat();
    const filteredFlatBoard = flatBoard.filter(cell => cell !== '');
    const sortedBoard = [...filteredFlatBoard].sort((a, b) => a - b);

    const isSortedWithoutEmpty = JSON.stringify(filteredFlatBoard) === JSON.stringify(sortedBoard);
    const isLastTileEmpty = flatBoard[flatBoard.length - 1] === '';

    return isSortedWithoutEmpty && isLastTileEmpty;
  }

  return (
    <section>
      <article id="container">
        {board.map((row, rowIndex) => (
          <ul key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <li key={columnIndex} className={cell === '' ? 'empty-cell' : ''} onClick={() => handleMovingCells(rowIndex, columnIndex)} >
                {cell}
              </li>
            ))}
          </ul>
        ))}
      </article>
      <ShuffleButton onClick={shuffleBoard} />
      {/* <button onClick={() => setIsOpen(true)}>Open modal</button> */}
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  )
}

export default PlayingField;