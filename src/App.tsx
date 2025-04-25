import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarPage } from "./components/car-page/CarPage";
import { HomePage } from "./components/home-page/HomePage";
import { Container } from "./UI/Container";
import { Header } from "./components/header/Header";
import { TitleBlock } from "./UI/TitleBlock";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container containerType="header">
          <Header />
        </Container>

        <Container containerType="body">
          <TitleBlock />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/car/:code" element={<CarPage />} />
          </Routes> 
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
