import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./pages/App.jsx";
import ErrorManager from "./error/ErrorManager";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Ensures error popups work globally */}
    <ErrorManager />
    <App />
  </StrictMode>
);
