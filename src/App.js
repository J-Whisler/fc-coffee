import React from "react";
import "./App.css";

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Nav from "./Components/Nav";
import Home from './Components/Pages/Home';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Route path="/" exact component={Home}></Route>
      </Router>
    </>
  );
};

export default App;
