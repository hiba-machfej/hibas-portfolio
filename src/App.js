import React from "react";
import "./App.scss";
import MainNavbar from "./components/Navbar";
import Home from "./containers/Home";
import Cursor from "./components/Cursor";

function App() {
  const [cursorStyle, setCursorStyle] = React.useState("cursor");

  return (
    <div>
      <Cursor cursorStyle={cursorStyle} />
      <MainNavbar />
      <Home setCursorStyle={setCursorStyle} />
    </div>
  );
}

export default App;
