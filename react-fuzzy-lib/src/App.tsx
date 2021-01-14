
import logo from './logo.svg';
import './App.css';
import { CounterComponent} from "./lib/index"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CounterComponent initialCounter={10} />
      </header>
    </div>
  );
}

export default App;
