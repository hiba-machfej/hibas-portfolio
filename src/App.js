import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Home from "./containers/Home";
import Cursor from "./components/Cursor";

function App() {
  const [cursorStyle, setCursorStyle] = React.useState("cursor");

  return (
    <Router>
      <Cursor cursorStyle={cursorStyle} />
      <MainNavbar />
      <Switch>
        <Route exact path="/">
          <Home setCursorStyle={setCursorStyle} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
