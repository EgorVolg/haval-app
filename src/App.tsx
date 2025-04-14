import "./App.css";
import { Button } from "./UI/Button";
import logo from "./UI/images/logo.svg";

const brands = [
  "Chery",
  "Haval",
  "Geely",
  "Exeed",
  "Omoda",
  "Changan",
  "Jaecoo",
];

const engineVolumes = ["1.5", "1.6", "2.0"];

const complectations = [
  "Action",
  "Techno",
  "Travel",
  "Luxury",
  "Cosmo",
  "Trek",
  "Comfort",
  "Family",
  "Prestige",
  "Elite",
  "Dreamline",
  "Speedline",
  "Ultimate",
];

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

      <main className="main">
        <div className="container">
          <p className="main__title">Автомобили Chery в СПб</p>
          <div className="main__inner">
            <nav className="filters__group_sidebar">
              <aside className="filter__group">
                <p className="filters__title">Бренд</p>
                <div className="filter__buttons">
                  {brands.map((brand) => (
                    <div className="filter__item" key={brand}>
                      <Button>{brand}</Button>
                    </div>
                  ))}
                </div>
              </aside>

              <aside className="filter__group">
                <p className="filters__title">Объем двигателя</p>
                <div className="filter__buttons">
                  {engineVolumes.map((volume) => (
                    <div className="filter__item" key={volume}>
                      <Button>{volume}</Button>
                    </div>
                  ))}
                </div>
              </aside>

              <aside className="filter__group">
                <p className="filters__title">Комплектация</p>
                <div className="filter__buttons">
                  {complectations.map((complectation) => (
                    <div className="filter__item" key={complectation}>
                      <Button>{complectation}</Button>
                    </div>
                  ))}
                </div>
              </aside>
              
              <div className="filter__reset">
                <Button>Сбросить фильтр</Button>
              </div>
            </nav>

            <div className="list"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
