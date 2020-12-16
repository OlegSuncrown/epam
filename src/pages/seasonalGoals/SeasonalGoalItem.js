import React, { useState } from "react";
import { Button, Col, Row, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const SeasonalGoalItem = (props) => {
  return (
    <>
      <Link to="/">
        <Row>
          <Col>{props.title || "Save money"}</Col>
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

export default SeasonalGoalItem;
