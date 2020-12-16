import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import SeasonalGoalItem from "./SeasonalGoalItem";

const SeasonalGoals = (props) => {
  // const goalsList = useContext(GoalsContext);

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
      <SeasonalGoalItem title="1000 push-ups this month" progress="30" />
    </Container>
  );
};

export default SeasonalGoals;
