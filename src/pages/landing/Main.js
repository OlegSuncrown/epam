import React from "react";
import { Container, Col, Row } from "react-bootstrap";
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

      <Row className="about-us py-5 px-2">
        <Col className="col-md-4 col-12 col-lg-4">
          <h2 className="text-center">Who are we?</h2>
        </Col>
        <Col className="col-md-8 col-12 col-lg-7">
          <h5>
            <b>Highway to accomplish</b> is a rapidly evolving platform with the
            tools to help you achieve your goals. With us you will transform
            your goals into reality.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
