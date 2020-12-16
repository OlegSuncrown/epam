import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";

import { BagesPage, LandingPage, RegisterPage, LoginPage } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={BagesPage} />
        {/* <Route exact path="/" component={LandingPage} /> */}
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </>
  );
};

export default App;
