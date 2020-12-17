import React from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Container fluid className="p-0">
      <div className="hero-block">
        <Row>
          <Col className="col-12 col-lg-9 col-xl-7">
            <h1>What do you want to accomplish?</h1>
          </Col>
        </Row>

        <Row>
          <Col className="col-12 col-xl-6">
            <p>Choose from our featured options or create your custom goal</p>
          </Col>
        </Row>

        <Row>
          <Col className="col-4  text-right">
            <Link to="/">
              <span>Featured</span>
            </Link>
          </Col>
          <Col className="col-6 pr-2">
            <Link to="/dashboard/goals/new">
              <span>Create your own</span>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Hero;
