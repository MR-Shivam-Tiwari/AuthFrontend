import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Otp from "./Components/Auth/Otp";
import PasswordChanged from "./Components/Auth/PasswordChanged";
import Forgot from "./Components/Auth/Forgot";
import NewPassword from "./Components/Auth/NewPassword";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register">
          <Register  />
        </Route>
        <Route path="/otp">
          <Otp  />
        </Route>
        <Route path="/password-change">
          <PasswordChanged  />
        </Route>
        <Route path="/forgot-password">
          <Forgot  />
        </Route>
        <Route path="/new-password">
          <NewPassword  />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
