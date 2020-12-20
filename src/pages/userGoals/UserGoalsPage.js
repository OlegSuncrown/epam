import React, { useState, useContext, useEffect } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import GoalItem from "./GoalItem";
import { GoalContext } from "../../context/goals/GoalContext";
const UserGoals = () => {
  const { goalsList, isLoaded, goalsError, loadGoals } = useContext(
    GoalContext
  );

  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
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

  if (!goalsList.length) {
    return <h2 className="text-center">Your list is empty</h2>;
  }

  console.log(goalsList);

  return (
    <Container fluid>
      {goalsList.map((item) => {
        return (
          <GoalItem
            key={item.goalId}
            title={item.nameGoal}
            // startDate={item.startDate}
            // endDate={item.plannedEndDate}
            // progress={50}
          />
        );
      })}

      <Button to="/addGoal" variant="outline-primary" block as={Link}>
        Add Goal
      </Button>
    </Container>
  );
};

export default UserGoals;
