import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";

const SideBar = () => {
  return (
    <div className="d-block d-lg-block mb-4">
      <Container fluid>
        <Row className="p-0">
          <Col className="p-0 mx-auto" lg={12} sm={4}>
            <UserAvatar />
          </Col>
          <Col className="p-0" lg={12} sm={8}>
            <Navbar className="p-0" bg="light" variant="light">
              <Nav className="flex-column">
                <Nav.Link exact to="/dashboard" as={NavLink}>
                  <i className="mr-3 fas fa-user-circle"></i>
                  Profile
                </Nav.Link>
                <Nav.Link to="/dashboard/user-goals" as={NavLink}>
                  <i className="mr-3 fas fa-dot-circle"></i>
                  User Goals
                </Nav.Link>
                <Nav.Link to="/dashboard/seasonal-goals" as={NavLink}>
                  <i className="mr-3 fas fa-globe"></i>
                  Season Goals
                </Nav.Link>
                <Nav.Link to="/dashboard/add-goal" as={NavLink}>
                  <i className="mr-3 fas fa-plus-circle"></i>
                  Add New Goal
                </Nav.Link>
                <Nav.Link to="/dashboard/user-bages" as={NavLink}>
                  <i className="mr-3 fas fa-trophy"></i>
                  Your Awards
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
