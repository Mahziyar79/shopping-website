import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import Cards from "./Pages/Cards";
import routes from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={Math.floor(Math.random() * 1000)} {...route} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
