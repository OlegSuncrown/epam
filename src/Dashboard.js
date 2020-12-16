import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ProfilePage, UserGoalsPage, SeasonalGoals } from "./pages";
import { SideBar } from "./components";

const Dashboard = () => {
  let match = useRouteMatch();
  return (
    <>
      <h1 className="text-center mt-3">Dashboard</h1>
      <Router>
        <Container>
          <Row>
            <Col xs={2} md={3}>
              <SideBar />
            </Col>
            <Col>
              <Switch>
                <Route exact path={`${match.path}/`} component={ProfilePage} />
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
