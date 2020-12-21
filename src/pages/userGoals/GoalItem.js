import React, { useState } from "react";
import { Col, ProgressBar, Row, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./goals.css";
const GoalItem = ({
  title,
  id,
  progress,
  isLoaded,
  allDays,
  currentDay,
  deleteGoals,
}) => {
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
      {/* <Link to={`goals/${id}`} className="text-decoration-none"> */}
      <Row className="item-goal mb-3  py-1">
        <Col className="col-12 text-center">
          <h4 className="m-0 p-0">
            <i
              onClick={() => deleteGoals(+id)}
              class="fas fa-trash float-right p-2 delete-goal"
            ></i>
            <strong>{title}</strong>
          </h4>
          <hr className="m-0 mt-2" />
        </Col>
        <Col className="col-12 col-sm-10 mx-auto d-flex align-items-center">
          <ProgressBar
            className="w-100 shadow"
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
        <Col className="col-12 col-sm-2">
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
            to="/dashboard/user-goals"
            variant="outline-warning mr-4"
            size="sm"
            as={Link}
          >
            More info
          </Button>
          <Button
            to={`goals/${id}`}
            variant="outline-danger"
            as={Link}
            size="sm"
          >
            Complete
          </Button>
        </Col>
      </Row>
      {/* </Link> */}
    </>
  );
};

export default GoalItem;
