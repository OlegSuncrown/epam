import React, { useContext } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";

const Header = () => {
  const { isAuthenticated, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            Highway To Accomplish
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {!isAuthenticated ? (
                <>
                  <Nav.Link to="/login" as={NavLink}>
                    Login
                  </Nav.Link>
                  <Nav.Link to="/register" as={NavLink}>
                    Register
                  </Nav.Link>
                  )
                </>
              ) : (
                <div className="d-flex align-items-center">
                  <Nav.Link exact to="/dashboard" as={NavLink}>
                    Dashboard
                    {/* <i className='fas fa-user ml-2'></i> */}
                  </Nav.Link>
                  <Nav.Link to="/dashboard/user-bages" as={NavLink}>
                    Add New Goal
                    {/* <i className='fas fa-user ml-2'></i> */}
                  </Nav.Link>
                  <Button
                    variant="outline-secondary"
                    className="border-0"
                    onClick={logOut}
                  >
                    <i
                      className="fas fa-sign-out-alt"
                      style={{ fontSize: "25px" }}
                    ></i>
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
