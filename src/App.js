import React from "react";
import "./App.css";

import {BrowserRouter as Router} from 'react-router-dom'

import Nav from "./Components/Nav";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
      </Router>
    </>
  );
};

export default App;
