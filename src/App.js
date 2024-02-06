import PlayingField from "./components/PlayingField";
import ShuffleButton from "./components/ShuffleButton";
import gridVariables from './config.js'

function App() {
  const rows = gridVariables.rows;
  const columns = gridVariables.columns

  return (
    <>
      <header>
        <h1>Sliding Tile Puzzle</h1>
      </header>
      <PlayingField numRows={rows} numColumns={columns} />
      <ShuffleButton />
    </>
  );
}

export default App;
