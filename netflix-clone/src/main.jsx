import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter allows us to use routing and navigate between different pages. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
