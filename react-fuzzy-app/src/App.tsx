import logo from './logo.svg';
import './App.css';
import {ScreamComponent} from "@fuze/react-fuzzy"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ScreamComponent text="This is a test." />
      </header>
    </div>
  );
}

export default App;
