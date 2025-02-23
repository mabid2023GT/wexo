import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.scss";
import App from "./pages/App.jsx";
import ErrorManager from "./error/ErrorManager";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Ensures error popups work globally */}
      <ErrorManager />
      <App />
    </QueryClientProvider>
  </StrictMode>
);
