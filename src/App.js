import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";


function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
