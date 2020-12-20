import React from "react";
import { Container, Col, Button, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdsCard = (props) => {
  return (
    <Container fluid>
      <Row
        className={
          props.title !== "Loose weight"
            ? "d-flex justify-content-center cards py-3"
            : "d-flex justify-content-center flex-row-reverse cards py-3"
        }
      >
        <Col className="col-xs-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center justify-content-center">
          <h2 className="mb-4">
            <strong>{props.title}</strong>
          </h2>
          <p className="mb-4">{props.text}</p>
          <Button
            to={`dashboard/add-goal?title=${props.title}`}
            className="btn btn-primary px-5 mb-4"
            as={Link}
          >
            Select Goal
          </Button>
        </Col>
        <Col className="col-12 col-sm-7 col-lg-4 card-block text-center">
          <Image className="card-img" src={props.img} />
        </Col>
      </Row>
    </Container>
  );
};

export default AdsCard;
