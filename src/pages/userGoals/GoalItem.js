import React, { useState } from "react";
import { Col, ProgressBar, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./goals.css";
const GoalItem = ({
  title,
  id,
  startDate,
  progress,
  endDate,
  allDays,
  currentDay,
}) => {
  return (
    <>
      <Link to={`goals/${id}`} className="text-decoration-none">
        <Row className="item-goal mb-3  py-1 shadow">
          <Col className="col-12 text-center">
            <h4 className="m-0 p-0">
              <strong>{title || "Save money"}</strong>
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
              to="/dashboard"
              variant="outline-danger"
              as={Link}
              size="sm"
            >
              Complete
            </Button>
          </Col>
        </Row>
      </Link>
    </>
  );
};

export default GoalItem;
