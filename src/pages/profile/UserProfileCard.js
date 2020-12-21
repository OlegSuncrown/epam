import Axios from "axios";
import { React } from "react";
import { Card, Col } from "react-bootstrap";

const UserProfileCard = ({ name, picture }) => {
  return (
    <Col className="col-12 col-sm-6 col-md-3 my-3">
      <Card>
        <Card.Img className="rounded-circle" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserProfileCard;
