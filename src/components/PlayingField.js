const PlayingField = ({ numRows, numColumns }) => {
  const gridData = [];
  let counter = 1;

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numColumns; j++) {
      row.push(counter++);
      if (counter > 15) counter = 1;
    }
    gridData.push(row);

    /*     return (
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li className="empty"></li>
          </ul>
        ) */
  }

  return (
    <div id="container">
      {gridData.map((row, rowIndex) => (
        <ul key={rowIndex}>
          {row.map((cell, colIndex) => (
            <li key={colIndex}>
              {cell}
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default PlayingField;