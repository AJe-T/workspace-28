import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// =============================================
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";

createRoot(document.getElementById("root")).render(<App />);