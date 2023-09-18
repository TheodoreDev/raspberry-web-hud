import logo from '../ressources/img/Raspberry_Pi_logo.svg';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar">
            <ul>
                <li><a href="#" class="a active">Home</a></li>
                <li><a href="#" class="a">Mcserv</a></li>
                <li><a href="#" class="a">My apps</a></li>
            </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world !
        </p>
      </header>
    </div>
  );
}

export default App;
