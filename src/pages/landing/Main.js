import React from "react";
import { Container, Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import workoutImage from "../../assets/cardImageWorkout.svg";

const Main = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col className="p-0">
          <Card className="card border-primary mb-3">
            <Card.Body>
              <Card.Title className="card-title text-center">
                Exercise regulary
              </Card.Title>
            </Card.Body>
            <Card.Text>
              Pick the number of days you’ll exercise each week and stay on
              track with weekly Reports. Over 1M workouts reported by our users.
            </Card.Text>
            <Button>Select Goal</Button>
            <Card.Img variant="left" src={workoutImage} />
          </Card>
        </Col>
        <Col className="p-0">
          {/* <img className="cardImage" src={workoutImage}></img> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
