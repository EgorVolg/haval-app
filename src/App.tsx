import "./App.css";
import logo from "./images/logo.svg";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <a href="#" className="logo__container">
              <img src={logo} alt="logo" />
              <div className="vertical-line"></div>
              <span className="logo__text">Официальный дилер Максимум</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
