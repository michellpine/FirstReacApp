import logo from './logo.svg';
import './App.css';

function App() {
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
           <div>
            <h1>Mi primera aplicación</h1>
            <p>Esta es mi primera aplicación en React, está padrísimo!</p>
           </div>
        </a>
      </header>
    </div>
  );
}

export default App;
