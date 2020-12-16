import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/dashboard">
            React-Bootstrap
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link exact to='/' as={NavLink}>
                <i className='fas fa-user'></i>
                Home
              </Nav.Link> */}
              <Nav.Link exact to="/dashboard" as={NavLink}>
                <i className="fas fa-user"></i>
                Dashboard
              </Nav.Link>
              <Nav.Link to="/login" as={NavLink}>
                <i className="fas fa-user"></i>
                Login
              </Nav.Link>

              <Nav.Link to="/register" as={NavLink}>
                <i className="fas fa-user"></i>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
