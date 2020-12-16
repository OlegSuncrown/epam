import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import GoalItem from "./GoalItem";

const UserGoals = (props) => {
  // const { goalsList } = useContext(GoalsContext);

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          Title
        </Col>
        <Col className="col-sm-3">Start date</Col>
        <Col className="col-sm-3">End Date</Col>
        <Col className="d-sm-none d-md-block">Progress</Col>
      </Row>

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

      <Link to="/addGoal" className="text-decoration-none">
        <Row className="hover-row py-4">
          <Col className="text-center">Add Goal</Col>
        </Row>
      </Link>
    </Container>
  );
};

export default UserGoals;
