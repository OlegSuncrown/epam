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
        <Col>Start date</Col>
        <Col>End Date</Col>
        <Col>Progress</Col>
      </Row>

      {/* {goalsList.map(item => {
               (<GoalItem 
                  title={item.title} 
                  startDate={item.startDate} 
                  endDate={item.endDate} 
                  progress={item.progress} 
               />) 
            })} */}
      <SeasonalGoalItem title="Walk 10000 steps every day" progress="30" />
    </Container>
  );
};

export default SeasonalGoals;
