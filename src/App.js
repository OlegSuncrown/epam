import { Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthContext";
import Dashboard from "./Dashboard";

import setAuthToken from "./utils/setAuthToken";
import { Header } from "./layouts";
import { LandingPage, RegisterPage, LoginPage } from "./pages";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  if (localStorage.AuthToken) {
    setAuthToken(localStorage.AuthToken);
  }

  return (
    <>
      <AuthState>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthState>
    </>
  );
};

export default App;
