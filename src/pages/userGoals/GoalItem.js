import React, { useState } from "react";
import { Container, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoalItem = ({ title, startDate, progress, endDate }) => {
  return (
    <>
      <Link to="/dashboard/goals/1" className="text-decoration-none">
        <Row className="hover-row mb-3 bg-light py-3 shadow">
          <Col className="col-12 text-center">
            <Link to="/">
              <i class="fas fa-trash float-right"></i>
            </Link>
            <h4>
              <strong>{title || "Save money"}</strong>
            </h4>
            <hr />
          </Col>
          <Col className="col-12 col-sm-11 mx-auto mb-2 ">
            <ProgressBar
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
          <Col className="col-12 col-sm-11 mx-auto d-flex justify-content-between">
            <h6>
              <span>
                <strong className="mr-2">Start:</strong>
              </span>
              {startDate || "21.11.2020"}
            </h6>
            <h6>
              <span>
                <strong className="mr-2">End:</strong>
              </span>{" "}
              {endDate || "30.12.2020"}
            </h6>
          </Col>
          {/* <Col className="col-6">
            {endDate || "30.12.2020"}
          </Col> */}
        </Row>
      </Link>
    </>
  );
};

export default GoalItem;
