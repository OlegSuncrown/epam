import React, { useContext, useState, useEffect } from "react";
import { Form, Button, Col, Container } from "react-bootstrap";
import { AuthContext } from "../../context/auth/AuthContext";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = ({ history }) => {
  const { loginUser, isAuthenticated } = useContext(AuthContext);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // Get value from the form
  const onChange = (e) =>
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      return await loginUser(userLogin);
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

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/dashboard");
    }
  }, [isAuthenticated]);

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
          <span className="text-primary">Log</span> in
        </h2>
        <Form onSubmit={handleSubmit} className="h-100">
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
              disabled={loading}
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
