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
      </header>
      <div class="Rasp_chargement">
          <div class="box">
            <svg>
              <defs>
                <linearGradient id="Gradient" gradientTransform="rotate(90)">
                  <stop offset="5%" stopColor='red'/>
                  <stop offset="50%" stopColor='orange'/>
                  <stop offset="95%" stopColor='green'/>
                </linearGradient>
              </defs>
              <circle cx="70px" cy="70px" r="70px" fill='url(#Gradient)'>
              </circle>
            </svg>
            <span>%</span>
          </div>
        </div>
    </div>
  );
}

export default App;
