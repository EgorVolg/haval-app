import { useSelector } from "react-redux";
import "./App.css";
import { CarList } from "./components/car-list/CarList";
import { Filters } from "./components/filters/Filters";
import logo from "./UI/images/logo.svg";

function App() {
  const brand = useSelector(
    (state: { car: { brand: string } }) => state.car.brand
  );

  return (
    <div className="app">
      <div className="container header__container">
        <header className="header">
          <a href="#" className="logo__container">
            <img src={logo} alt="logo" className="logo__img" />
            <div className="vertical-line"></div>
            <span className="logo__text">Официальный дилер Максимум</span>
          </a>
        </header>
      </div>

      <div className="container main__container">
        <main className="main">
          <p className="main__title">Автомобили {brand} в СПб</p>
          <div className="main__inner">
            <Filters />
            <CarList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
