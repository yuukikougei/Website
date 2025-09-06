import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

document.documentElement.style.setProperty(
  "--base-url",
  import.meta.env.BASE_URL
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/Website">
      <App />
    </BrowserRouter>
  </StrictMode>
);
