import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./UI/fonts/tactic-sans/stylesheet.css";
import App from "./App"; 
import { Provider } from "react-redux";
import { store } from "./state/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
