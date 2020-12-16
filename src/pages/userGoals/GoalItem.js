import React, { useState } from "react";
import { Container, Col, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const GoalItem = (props) => {
  return (
    <>
      <Link to="/">
        <Row>
          <Col xs={6} md={4}>
            {props.title || "Save money"}
          </Col>
          <Col>{props.startDate || "21.11.2020"}</Col>
          <Col>{props.endDate || "30.12.2020"}</Col>
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
