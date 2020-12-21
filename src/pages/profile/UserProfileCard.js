import Axios from "axios";
import { React } from "react";
import { Card, Col } from "react-bootstrap";
import profilePictureDefault from "../../assets/profilePicture.jpg";

const UserProfileCard = ({ name, picture }) => {
  return (
    <Col className="col-12 col-sm-6 col-md-3 my-3">
      <Card className="shadow">
        <Card.Img
          className="rounded-circle"
          variant="top"
          src={picture || profilePictureDefault}
        />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserProfileCard;
