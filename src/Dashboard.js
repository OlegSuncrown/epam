import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ProfilePage, UserGoalsPage, SeasonalGoals, BagesPage } from "./pages";
import { SideBar } from "./components";
import SingleGoal from "./pages/goals/SingleGoal";

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <>
      <Container className="py-5">
        <Row>
          <Col xs={12} lg={3}>
            <SideBar />
          </Col>
          <Col className="mx-auto">
            <Switch>
              <Route exact path={path} component={ProfilePage} />
              <Route
                exact
                path={`${path}/add-goal/:id`}
                component={SingleGoal}
              />
              <Route path={`${path}/user-goals`} component={UserGoalsPage} />
              <Route
                path={`${path}/seasonal-goals`}
                component={SeasonalGoals}
              />
              <Route path={`${path}/user-bages`} component={BagesPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
