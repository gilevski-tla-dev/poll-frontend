import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "@/shared/styles/reset.css";
import "@/shared/styles/variables.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
