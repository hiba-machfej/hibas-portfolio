import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import projectData from "./projectData.json";
import MainNavbar from "./components/Navbar";
import Home from "./containers/Home";
import Portfolio from "./containers/Portfolio";
import SingleProject from "./components/SingleProject";
import Contact from "./containers/Contact";
import Cursor from "./components/Cursor";

function App() {
  const [cursorStyle, setCursorStyle] = React.useState("cursor");
  console.log(projectData.projects.map((project) => console.log(project.id)));
  return (
    <Router>
      <Cursor cursorStyle={cursorStyle} />
      <MainNavbar />
      <Switch>
        <Route exact path="/">
          <Home setCursorStyle={setCursorStyle} />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio setCursorStyle={setCursorStyle} />
        </Route>
        {projectData.projects.map((project, index) => (
          <Route
            exact
            path={project.id}
            children={<SingleProject project={project} />}
          />
        ))}
      </Switch>
      <Contact />
    </Router>
  );
}

export default App;
