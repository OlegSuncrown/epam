import React, { useState } from "react";
import { Container, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoalItem = (props) => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <Row className="hover-row  py-4 m-0">
          <Col xs={6} md={4} className="">
            {props.title || "Save money"}
          </Col>
          <Col className="col-6 col-sm-3">
            {props.startDate || "21.11.2020"}
          </Col>
          <Col className="d-none d-sm-block">
            {props.endDate || "30.12.2020"}
          </Col>
          <Col>
            <ProgressBar
              now={props.progress}
              label={`${props.progress}%`}
              variant="success"
            />
          </Col>
        </Row>
      </Link>
    </>
  );
};

export default GoalItem;
