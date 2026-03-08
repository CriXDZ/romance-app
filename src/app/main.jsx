import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/* Importar CSS Modular */
import "../styles/index.css";

/* Importar App */
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
