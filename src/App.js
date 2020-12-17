import AuthState from "./context/auth/AuthContext";

import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";
import Dashboard from "./Dashboard";
import { LandingPage, RegisterPage, LoginPage } from "./pages";

const App = () => {
  // if(localStorage.token){
  //   setAuthToken(localStorage.token)
  // }
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
