import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";

import setAuthToken from "./utils/setAuthToken";
import { Header } from "./layouts";
import { Footer } from "./layouts";
import { LandingPage, RegisterPage, LoginPage } from "./pages";
//import { AuthContext } from "./context/auth/AuthContext";
const App = () => {
  // const { isAuthenticated } = useContext(AuthContext);

  if (localStorage.AuthToken) {
    setAuthToken(localStorage.AuthToken);

    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
