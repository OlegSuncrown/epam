import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import {
  ProfilePage,
  UserGoalsPage,
  SeasonalGoals,
  BagesPage,
  Goal,
} from "./pages";
import { SideBar } from "./components";
import SingleGoal from "./pages/goals/SingleGoal";

const Dashboard = () => {
  let { path } = useRouteMatch();
  return (
    <div className="dashboard">
      <Container className="py-5 dashboard">
        <Row>
          <Col xs={12} lg={3} className="d-none d-lg-block">
            <SideBar />
          </Col>
          <Col className="mx-auto">
            <Switch>
              <Route exact path={path} component={ProfilePage} />
              <Route exact path={`${path}/goals/:id`} component={Goal} />
              <Route exact path={`${path}/add-goal/`} component={SingleGoal} />
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
    </div>
  );
};

export default Dashboard;
