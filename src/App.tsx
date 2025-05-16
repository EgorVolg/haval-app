import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarPage } from "./components/car-page/CarPage";
import { HomePage } from "./components/home-page/HomePage";
import { Header } from "./components/header/Header";
import { TitleBlock } from "./UI/TitleBlock";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car/:code" element={<CarPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
