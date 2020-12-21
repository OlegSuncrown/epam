import Axios from "axios";
import { React, useState } from "react";
import { Card, Col, Modal, Button, Figure } from "react-bootstrap";
import profilePictureDefault from "../../assets/profilePicture.jpg";

const UserProfileCard = ({ name, picture }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const showProfile = () => setShow(true);

  if (!picture) {
    picture = profilePictureDefault;
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-self-center mr-3">
          <Figure onClick={showProfile}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={picture}
              className="avatar"
            />
          </Figure>
          <div>{name}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Col className="col-12 col-sm-6 col-md-3 my-3" onClick={showProfile}>
        <Card className="shadow d-flex align-items-center">
          <Card.Img className="avatar" variant="top" src={picture} />
          <Card.Body>
            <Card.Title className="text-center">{name}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default UserProfileCard;
