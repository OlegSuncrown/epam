import { Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthContext";
import Dashboard from "./Dashboard";

import setAuthToken from "./utils/setAuthToken";
import { Header } from "./layouts";
import { LandingPage, RegisterPage, LoginPage } from "./pages";

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
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </AuthState>
    </>
  );
};

export default App;
