import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from './api';

function App() {
  const sendHello = () => {
    sendMsg("Hello World!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={sendHello}>Send Hello</button>
      </header>
    </div>
  );
}

export default App;
