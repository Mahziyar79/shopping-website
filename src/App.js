import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <ToastContainer />
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={Math.floor(Math.random() * 1000)} {...route} />
          ))}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
