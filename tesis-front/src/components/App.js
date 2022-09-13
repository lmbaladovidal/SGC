import logo from '../logo.svg';
import '../App.css';
import Login from './Login.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Login></Login>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Deivid!
        </a>
      </header>
    </div>
  );
}

export default App;
