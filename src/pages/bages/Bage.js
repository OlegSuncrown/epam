import React, { useState } from "react";
import { Modal, Figure, Button, Col } from "react-bootstrap";
import Award from "../../assets/award.png";
import GoldenAward from "../../assets/golden-award.png";
import SuperAward from "../../assets/10streakreward.jpg";

const Bage = ({ title, type }) => {
  const [show, setShow] = useState(false);
  const isStreak = type !== "completed goal";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getIcon = (type) => {
    switch (type) {
      case "superStreak":
        return SuperAward;
      case "streak":
        return GoldenAward;
      default:
        return Award;
    }
  };

  return (
    <>
      <Col xs={6} sm={4} md={4}>
        <Figure onClick={handleShow}>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={getIcon()}
            roundedCircle
            className="border border-warning"
          />
        </Figure>
      </Col>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Bage</Modal.Title>
        </Modal.Header>
        <Modal.Body className="align-self-center mr-3">
          <Figure onClick={handleShow}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={getIcon()}
              roundedCircle
            />
          </Figure>
          <div className="text-center">
            {isStreak ? `Streak of ${title} Goals!` : title}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Bage;
