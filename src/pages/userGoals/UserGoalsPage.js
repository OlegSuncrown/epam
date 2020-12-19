import React, { useState, useContext } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import GoalItem from "./GoalItem";

const UserGoals = (props) => {
  // const { goalsList } = useContext(GoalsContext);
  const { path } = useRouteMatch();

  return (
    <Container fluid>
      {/* <Row className='mb-3 shadow'>
        <Col xs={6} md={4}>
          Title
        </Col>
        <Col className=" col-sm-3">Start date</Col>
        <Col className="d-none d-sm-block col-sm-3">End Date</Col>
        <Col className="d-none d-md-block">Progress</Col>
      </Row> */}

      {/* {goalsList.map(item => {
                 (<GoalItem 
                    title={item.title} 
                    startDate={item.startDate} 
                    endDate={item.endDate} 
                    progress={item.progress} 
                 />) 
              })} */}
      <GoalItem title="Walk 10000 steps every day" progress="30" />
      <GoalItem title="Quit smoking" progress="100" />
      <GoalItem title="Save money" progress="50" />
      <GoalItem title="Save money" progress="50" />

      <Button to="/addGoal" variant="outline-primary" block as={Link}>
        Add Goal
      </Button>
    </Container>
  );
};

export default UserGoals;
