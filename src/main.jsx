import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { checkAuthStatus } from "./redux/authSlice";
import store from "./redux/store";
import "./index.css";
import App from "./App.jsx";

store.dispatch(checkAuthStatus());

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
