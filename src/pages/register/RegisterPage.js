import React, { useState } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";

const Register = () => {
  const [validated, setValidated] = useState(false);
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = userRegister;
  const onChange = (e) =>
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Container>
      <div className="card m-3 p-3">
        <h2 className="text-center mb-3">
          <span className="text-primary">Register</span> Account
        </h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={onChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={onChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={onChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center mt-3">
            <Button
              to="/addGoal"
              variant="primary"
              type="submit"
              className="px-4"
            >
              Register
            </Button>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
