import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider,CartProvider } from "./context";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "bootstrap-icons/font/bootstrap-icons.css";
import { ScrollToTop } from "./components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
      <FilterProvider>
        <ScrollToTop />
        <ToastContainer closeButton={false} autoClose={3000} />
        <App />
      </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
