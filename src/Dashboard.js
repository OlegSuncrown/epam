import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ProfilePage, UserGoalsPage, SeasonalGoals, BagesPage } from "./pages";
import { SideBar, SideBarMobile } from "./components";

const Dashboard = () => {
  let match = useRouteMatch();
  return (
    <>
      <h1 className="text-center mt-3">Dashboard</h1>
      <SideBarMobile />
      <Router>
        <Container>
          <Row>
            <Col md={3} className="d-none d-lg-block">
              <SideBar />
            </Col>
            <Col>
              <Switch>
                <Route exact path={`${match.path}/`} component={ProfilePage} />
                <Route
                  path={`${match.path}/user-bages`}
                  component={BagesPage}
                />
                <Route
                  path={`${match.path}/user-goals`}
                  component={UserGoalsPage}
                />
                <Route
                  path={`${match.path}/seasonal-goals`}
                  component={SeasonalGoals}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
};

export default Dashboard;
