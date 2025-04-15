import { useSelector } from "react-redux";
import "./App.css";
import { CarList } from "./components/car-list/CarList";
import { Filters } from "./components/filters/Filters";
import logo from "./UI/images/logo.svg";

function App() {
  const brand = useSelector((state: { cars: { brand: string } }) => state.cars.brand);

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

      <main className="main">
        <div className="container">
          <p className="main__title">Автомобили {brand} в СПб</p>
          <div className="main__inner">
            <Filters />
            <CarList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
