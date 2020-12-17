import { Nav, Navbar, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserAvatar from "./UserAvatar";
const SideBar = () => {
  return (
    <>
      <UserAvatar />
      <Navbar className="p-0" bg="light" variant="light">
        <Nav className="flex-column">
          <Nav.Link exact to="/dashboard" as={NavLink}>
            <i className="mr-3 fas fa-user-circle"></i>
            Profile
          </Nav.Link>
          <Nav.Link to="/dashboard/user-bages" as={NavLink}>
            <i className="mr-3 fas fa-trophy"></i>
            Bages
          </Nav.Link>
          <Nav.Link to="/dashboard/user-goals" as={NavLink}>
            <i className="mr-3  fas fa-award"></i>
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
        </Nav>
      </Navbar>
    </>
  );
};

export default SideBar;
