import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { ProfilePage, UserGoalsPage, SeasonalGoals } from "./pages";
import { SideBar } from "./components";

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
              <Route exact path={path} component={ProfilePage} />
              <Route path={`${path}/user-goals`} component={UserGoalsPage} />
              <Route
                path={`${path}/seasonal-goals`}
                component={SeasonalGoals}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
