import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./styles/global.css";

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
const initialTheme = savedTheme || "light";
document.documentElement.dataset.theme = initialTheme;
document.documentElement.classList.toggle("theme-light", initialTheme === "light");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
