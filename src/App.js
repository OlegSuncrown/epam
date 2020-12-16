import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";
import Dashboard from "./Dashboard";
import { LandingPage, RegisterPage, LoginPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />

        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/dashboard/about" component={AboutPage} /> */}
      </Switch>
    </>
  );
};

export default App;
