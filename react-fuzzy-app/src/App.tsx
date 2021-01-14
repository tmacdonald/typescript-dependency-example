import logo from './logo.svg';
import './App.css';
import {ScreamComponent} from "@fuze/react-fuzzy"
import {CounterComponent} from "@fuze/react-fuzzy-lib"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ScreamComponent text="This is a test." />
        <CounterComponent incrementAmount={5} />
      </header>
    </div>
  );
}

export default App;
