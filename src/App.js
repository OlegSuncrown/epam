import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";
import Dashboard from "./Dashboard";
import { LandingPage, RegisterPage, LoginPage } from "./pages";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </>
  );
};

export default App;
