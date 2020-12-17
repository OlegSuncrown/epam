import React, { useState } from "react";
import { Modal, Figure, Button, Col } from "react-bootstrap";

const Bage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs={6} sm={4} md={4}>
        <Figure onClick={handleShow}>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg"
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
              src="https://cs9.pikabu.ru/post_img/2017/05/12/8/1494592816133830021.jpg"
              roundedCircle
            />
          </Figure>
          <div>Description of the bage</div>
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
