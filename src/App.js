import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";

import {
  LandingPage,
  RegisterPage,
  LoginPage,
  UserGoalsPage,
  SeasonalGoals,
} from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/userGoals" component={UserGoalsPage} />
        <Route exact path="/seasonalGoals" component={SeasonalGoals} />
      </Switch>
    </>
  );
};

export default App;
