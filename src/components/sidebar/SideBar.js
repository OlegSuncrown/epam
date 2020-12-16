import { Nav, Navbar } from "react-bootstrap";
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

          <Nav.Link to="/dashboard/profile" as={NavLink}>
            <i className="mr-3  fas fa-award"></i>
            Your Progress
          </Nav.Link>
          <Nav.Link to="/dashboard/global" as={NavLink}>
            <i className="mr-3 fas fa-globe"></i>
            Global Events
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
