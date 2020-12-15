import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="container">
      <div className="card m-3 p-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center mt-3">
            <Button type="submit">Submit form</Button>
          </Form.Row>
        </Form>
      </div>
    </div>
  );
};

export default Register;
