import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { LanguageProvider } from "./context/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>
);