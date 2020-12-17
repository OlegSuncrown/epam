import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import GoalItem from "../userGoals/GoalItem";

const SeasonalGoals = (props) => {
  // const goalsList = useContext(GoalsContext);

  return (
    <Container fluid>
      <Row>
        <Col xs={6} md={4}>
          Title
        </Col>
        <Col className=" col-sm-3">Start date</Col>
        <Col className="d-none d-sm-block col-sm-3">End Date</Col>
        <Col className="d-none d-md-block">Progress</Col>
      </Row>

      {/* {goalsList.map(item => {
                 (<GoalItem 
                    title={item.title} 
                    startDate={item.startDate} 
                    endDate={item.endDate} 
                    progress={item.progress} 
                 />) 
              })} */}
      <GoalItem title="1000 push-ups this month" progress="14" />
    </Container>
  );
};

export default SeasonalGoals;
