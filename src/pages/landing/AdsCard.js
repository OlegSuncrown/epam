import React from "react";
import { Container, Col, Button, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import workoutImage from "../../assets/cardImageWorkout.svg";

const AdsCard = (props) => {
  return (
    <Container fluid className="p-0 mb-4">
      <Row className="mx-5">
        <Col className="p-0 col-12 col-sm-6 d-flex justify-content-center justify-content-md-end">
          <Card className="mb-3 px-4 card styledCard ">
            <Card.Body>
              <Card.Title className="card-title text-center">
                <h1>{props.title}</h1>
              </Card.Title>
              <Card.Text className="py-4 my-4">{props.text}</Card.Text>
            </Card.Body>

            <Button className="btn btn-primary btn-lg">Select Goal</Button>
          </Card>
        </Col>
        <Col className="p-0 col-12 col-sm-6 d-flex justify-content-center justify-content-md-start">
          <img className="cardImage" src={props.img} fluid></img>
        </Col>
      </Row>
    </Container>
  );
};

export default AdsCard;
