import { Route, Switch } from "react-router-dom";
import { Header } from "./layouts";

import { LandingPage, Register } from "./pages";


const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </>
  );
};

export default App;
