import React from "react";
import { Container, Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import workoutImage from "../../assets/cardImageWorkout.svg";
import smokingImage from "../../assets/cardImageSmoking.svg";
import weightImage from "../../assets/cardImageWeight.svg";
import AdsCard from "./AdsCard";

const Main = () => {
  return (
    <Container fluid className="p-0">
      <AdsCard
        title="Exercise"
        img={workoutImage}
        text="Pick the number of days you’ll
      exercise each week and stay on track 
      with weekly Reports. Over 1M workouts
      reported by our users."
      />
      <AdsCard
        title="Loose weight"
        img={weightImage}
        text="Decide on your target weight
      and set a timeline to reach it. 
      We will
      automatically set up smart 
      milestones that adapt to your progress."
      />
      <AdsCard
        title="Quit Smoking"
        img={smokingImage}
        text="Pick a date and quit for good.
      Your loved ones will thank you.
      Over 20M cigarettes not smoked 
      on Highway to accomplish."
      />

      <Row className="aboutUs p-3">
        <Col className="col-12 col-md-6 d-flex justify-content-center">
          <h3>Who are we?</h3>
        </Col>
        <Col className="col-12 col-md-6 d-flex justify-content-center text-center p-0">
          <p>
            <b>Highway to accomplish</b> is a rapidly evolving platform with the
            tools to help you achieve your goals. With us you will transform
            your goals into reality.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
