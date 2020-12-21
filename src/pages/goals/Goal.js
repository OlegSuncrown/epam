import React, { useState, useContext, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Container, Spinner, Card } from "react-bootstrap";
import { GoalContext } from "../../context/goals/GoalContext";
import GoalProogress from "./GoalProgress";

const Goal = ({ match }) => {
  const { id } = match.params;

  const { goalsList, isLoaded, goalsError } = useContext(GoalContext);

  let goal = goalsList.find((el) => el.goalId === Number(id));

  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!goal) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">This goal does not exist</span>
        </Spinner>
      </div>
    );
  }

  if (goalsError) {
    return (
      <h4 className="text-danger text-center">
        <strong>{goalsError}</strong>
      </h4>
    );
  }

  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-between align-items-center"
    >
      <h1 className="mb-3">{goal.nameGoal}</h1>
      <Card
        className="mt-3 mb-5"
        style={{
          fontSize: "1.2em",
          borderRadius: "1em",
        }}
      >
        <Card.Body>{goal.description}</Card.Body>
      </Card>
      <div className="d-flex flex-column justify-content-between align-items-center">
        <GoalProogress goal={goal} />
      </div>
    </Container>
  );
};

export default Goal;
