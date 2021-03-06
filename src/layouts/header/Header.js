import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import DropdownMenu from "./DropdownMenu";
import Logo from "../../assets/logoHeader.svg";

const Header = () => {
  const { isAuthenticated, logOut } = useContext(AuthContext);
  let location = useLocation();

  return (
    <>
      <Navbar bg="dark" variant="dark py-3 nav-bar">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img className="logo" src={Logo}></img>
          </Navbar.Brand>

          {!isAuthenticated ? (
            <Nav>
              <Nav.Link
                to="/login"
                as={NavLink}
                to={{
                  pathname: "/login",
                  search: location.search,
                }}
              >
                <strong>Login</strong>
              </Nav.Link>
              <Nav.Link to="/register" as={NavLink}>
                <strong>Register</strong>
              </Nav.Link>
            </Nav>
          ) : (
            <>
              <Nav className="d-flex align-items-center">
                <Nav.Link exact to="/dashboard" as={NavLink} className=" p-0">
                  <DropdownMenu />
                </Nav.Link>

                <Nav.Link
                  variant="outline-secondary"
                  onClick={() => {
                    location.search = "";
                    logOut();
                  }}
                >
                  <strong>Logout</strong>{" "}
                  <i className="fas fa-sign-out-alt ml-1"></i>
                </Nav.Link>
              </Nav>
            </>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
