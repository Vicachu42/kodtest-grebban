import PlayingField from "./components/PlayingField.js";
import gridVariables from './config.js'

const App = () => {
  const rows = gridVariables.rows;
  const columns = gridVariables.columns

  return (
    <>
      <header>
        <h1>Sliding Tile Puzzle</h1>
      </header>
      <PlayingField numRows={rows} numColumns={columns} />
    </>
  );
}

export default App;