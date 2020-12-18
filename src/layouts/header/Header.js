import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

import Logo from "../../assets/logo.svg";

const Header = () => {
  const { isAuthenticated, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            {/* <img className="logo" src={Logo}></img> */}
            Logo
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!isAuthenticated ? (
              <Nav className="ml-auto">
                <Nav.Link to="/login" as={NavLink}>
                  Login
                </Nav.Link>
                <Nav.Link to="/register" as={NavLink}>
                  Register
                </Nav.Link>
                )
              </Nav>
            ) : (
              <Nav className="ml-auto d-flex align-items-center">
                <Nav.Link exact to="/dashboard" as={NavLink}>
                  Dashboard
                  {/* <i className='fas fa-user ml-2'></i> */}
                </Nav.Link>
                <Nav.Link to="/dashboard/user-bages" as={NavLink}>
                  Add New Goal
                  {/* <i className='fas fa-user ml-2'></i> */}
                </Nav.Link>
                <Nav.Link
                  variant="outline-secondary"
                  className="border-0"
                  onClick={logOut}
                >
                  <i
                    className="fas fa-sign-out-alt"
                    style={{ fontSize: "25px" }}
                  ></i>
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
