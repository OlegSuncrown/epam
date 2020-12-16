import { Form, Button, Col, Container } from "react-bootstrap";
import React from "react";

const LoginPage = () => {
  return (
    <Container>
      <div className="card m-3 p-3">
        <Form noValidate>
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
            <Button type="submit" variant="dark">
              Log in
            </Button>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
