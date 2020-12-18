import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ProfilePage, UserGoalsPage, SeasonalGoals, BagesPage } from "./pages";
import { SideBar } from "./components";
import SingleGoal from "./pages/goals/SingleGoal";

import PrivateRoute from "./utils/PrivateRoute";
const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <h1 className="text-center mt-3">Dashboard</h1>

      <Container>
        <Row>
          <Col xs={12} lg={3}>
            <SideBar />
          </Col>
          <Col className="mx-auto">
            <Switch>
              <PrivateRoute exact path={path} component={ProfilePage} />
              <PrivateRoute
                exact
                path={`${path}/add-goal/:id`}
                component={SingleGoal}
              />
              <PrivateRoute
                path={`${path}/user-goals`}
                component={UserGoalsPage}
              />
              <PrivateRoute
                path={`${path}/seasonal-goals`}
                component={SeasonalGoals}
              />
              <PrivateRoute path={`${path}/user-bages`} component={BagesPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
