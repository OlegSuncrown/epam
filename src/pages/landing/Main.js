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
        title="Exercise regularly"
        img={workoutImage}
        text="Pick the number of days you’ll
      exercise each week and stay on track 
      with weekly Reports. Over 1M workouts
      reported by our users."
      />
      <AdsCard
        title="Lose weight"
        img={weightImage}
        text="Decide on your target weight
      and set a timeline to reach it. 
      Don’t worry about calculations — we will
      automatically set up smart 
      milestones that adapt to your progress. "
      />
      <AdsCard
        title="Quit Smoking"
        img={smokingImage}
        text="Pick a date and quit for good.
      Your loved ones will thank you.
      Over 20M cigarettes not smoked 
      on Highway to accomplish."
      />
    </Container>
  );
};

export default Main;
