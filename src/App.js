import React from "react";
import { Router } from "react-router";
import Main from "./components/Main";
import { createBrowserHistory } from "history";
import logo from "./logo.svg";
import "./App.css";

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router history={history}>
          <Main />
        </Router>
      </header>
    </div>
  );
}

export default App;
