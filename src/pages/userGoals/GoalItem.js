import React from "react";
import { Col, ProgressBar, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import "./goals.css";
const GoalItem = ({
  goal,
  title,
  id,
  progress,
  isLoaded,
  allDays,
  currentDay,
  deleteGoals,
  completeGoal,
}) => {
  const deleteWithAlert = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          deleteGoals(+id);
        } else {
          return;
        }
      });
  };

  if (!isLoaded) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status" className="p-4 mt-5">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Row className="item-goal mb-3 py-1">
        <Col className="col-12 text-center">
          <h4 className="m-0 p-0">
            <i
              onClick={() => deleteWithAlert(id)}
              className="fas fa-trash float-right p-2 delete-goal"
            ></i>
            <strong>{title}</strong>
          </h4>
          <hr className="m-0 mt-2" />
        </Col>

        {/* Icon */}
        <Col className="col-6 col-sm-2 d-flex align-items-center justify-content-end">
          {goal.fullyCompleted ? (
            <i className="icon-goal-completed far fa-check-circle"></i>
          ) : !goal.fullyCompleted && goal.isCompleted ? (
            <i className="fas icon-goal-done fa-times"></i>
          ) : (
            <i className="fas icon-goal-active fa-exclamation-circle"></i>
          )}
        </Col>

        {/* Progress Bar */}
        <Col className="col-12 col-sm-8 mx-auto d-flex align-items-center">
          <ProgressBar
            className="w-100 shadow "
            now={progress}
            label={`${progress}%`}
            variant={
              progress > 80
                ? "success"
                : progress > 40 && progress < 80
                ? "warning"
                : "danger"
            }
          />
        </Col>
        <Col className="col-6 col-sm-2 ">
          <div className="text-center">
            <span className="current-day">{currentDay}/</span>
            <span className="end-day">{allDays}</span>

            <div className="text-center">
              <span className="days">days left</span>
            </div>
          </div>
        </Col>
        <Col className="col-12 text-center mt-2 mt-sm-0">
          <Button
            to={`goals/${id}`}
            variant="outline-warning mr-4"
            size="sm"
            as={Link}
          >
            More info
          </Button>
          <Button
            onClick={() => completeGoal(+id)}
            variant="outline-danger"
            size="sm"
          >
            Complete
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default GoalItem;
