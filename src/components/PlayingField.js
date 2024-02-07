import { useState } from "react";
import ShuffleButton from "./ShuffleButton.js"

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

  const shuffleBoard = () => {
    setBoard(generateBoard(numRows, numColumns));
  }

  return (
    <section>
      <article id="container">
        {board.map((row, rowIndex) => (
          <ul key={rowIndex}>
            {row.map((cell, colIndex) => (
              <li key={colIndex} className={cell === '' ? 'empty-cell' : ''}>
                {cell}
              </li>
            ))}
          </ul>
        ))}
      </article>
      <ShuffleButton onClick={shuffleBoard} />
    </section>
  )
}

export default PlayingField;