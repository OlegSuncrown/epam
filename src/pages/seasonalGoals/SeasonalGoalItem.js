import React, { useState } from "react";
import { Button, Col, Row, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

const SeasonalGoalItem = (props) => {
  return (
    <>
      <Link to="/" className="text-decoration-none">
        <Row className="hover-row  py-4">
          <Col xs={6} md={4} className="">
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

export default SeasonalGoalItem;
