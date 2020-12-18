import React from "react";
import "./App.css";
import Layout from "./features/layout";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import Regist from "./features/registration/regist";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/regist">
          <Regist />
        </Route>
      </Layout>
    </Router>
  );
}

export default App;
