import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";

import { LandingPage, RegisterPage, LoginPage, UserGoalsPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/goals" component={UserGoalsPage} />
      </Switch>
    </>
  );
};

export default App;
