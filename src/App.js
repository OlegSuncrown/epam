import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Dashboard from "./Dashboard";

import setAuthToken from "./utils/setAuthToken";
import { Header } from "./layouts";
import { Footer } from "./layouts";
import { LandingPage, RegisterPage, LoginPage } from "./pages";
import { AuthContext } from "./context/auth/AuthContext";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (localStorage.AuthToken) {
    setAuthToken(localStorage.AuthToken);
  }

  if (isAuthenticated || localStorage.AuthToken) {
    return (
      <div className="wrapper">
        <Header />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <Header />
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/" />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
