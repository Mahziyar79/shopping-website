import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";

function App() {
  return (
    <CartProvider>
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
