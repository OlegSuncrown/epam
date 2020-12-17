import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";

const LoginPage = ({ history }) => {
  const { loginUser, isAuthenticated } = useContext(AuthContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // Get value from the form
  const onChange = (e) =>
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userLogin);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated]);
  return (
    <Container>
      <div className="card m-3 p-3">
        <h2 className="text-center mb-3">
          <span className="text-primary">Log</span> in
        </h2>
        <Form noValidate onSubmit={handleSubmit}>
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
                name="password"
                required
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
              Log in
            </Button>
          </Form.Row>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;
