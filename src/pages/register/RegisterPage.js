import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
const Register = ({ history }) => {
  const query = new URLSearchParams(useLocation().search);
  const search = useLocation().search;
  const { registerUser, isAuthenticated } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [userRegister, setUserRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      if (query.get("title")) {
        history.push(`/dashboard/add-goal${search}`);
      } else {
        history.push("/dashboard");
      }
    }
  }, [isAuthenticated]);
  // Get value from the form
  const onChange = (e) =>
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      return await registerUser(userRegister);
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }

    setLoading(false);
  };
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="card m-3 p-3">
        <h2 className="text-center mb-3">
          <span className="text-primary">Register</span> Account
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                name="firstName"
                minlength="2"
                onChange={onChange}
              />
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
                minlength="2"
                onChange={onChange}
              />
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
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} md="4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                minlength="6"
                placeholder="Password"
                required
                name="password"
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row className="justify-content-md-center mt-3">
            <Button
              disabled={loading}
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
