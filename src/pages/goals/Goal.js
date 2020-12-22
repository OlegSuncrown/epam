import React, { useContext } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Container, Spinner, Card, Row } from "react-bootstrap";
import { GoalContext } from "../../context/goals/GoalContext";
import GoalProgress from "./GoalProgress";

const Goal = ({ match }) => {
  const { id } = match.params;
  const { goalsList, isLoaded, goalsError, deleteGoals } = useContext(
    GoalContext
  );
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
      <div className="d-flex h-100 justify-content-center align-items-center text-danger">
        <div className="align-items-center w-60 h-20">
          <h1>Goal does not exist or was deleted</h1>
        </div>
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
    <Container fluid>
      <Row className="p-0">
        <div className="col-12 col-md-8 mx-auto mb-3">
          <Card.Body
            className="bg-light"
            style={{
              fontSize: "1.2em",
              borderRadius: "1em",
            }}
          >
            {" "}
            <h1 className="mb-3 text-center">{goal.nameGoal}</h1>
            <hr />
            <Card.Body className="p-1">{goal.description}</Card.Body>
          </Card.Body>
        </div>
      </Row>

      <div className="d-flex flex-column justify-content-between align-items-center">
        <GoalProgress goal={goal} />
      </div>
    </Container>
  );
};

export default Goal;
