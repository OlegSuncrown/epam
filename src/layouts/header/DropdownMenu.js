import React, { useContext } from "react";
import { Image, Dropdown, Nav } from "react-bootstrap";
import { SideNav } from "../../components";
import "./dropdown.css";
import { AuthContext } from "../../context/auth/AuthContext";

const DropdownMenu = () => {
  const { userImage } = useContext(AuthContext);
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Nav.Link
      ref={ref}
      className="outline-light btn-sm p-0"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </Nav.Link>
  ));

  return (
    <Dropdown className="">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <div className="d-flex align-items-center px-2 py-1">
          <Image className="icon-avatar" src={userImage} fluid rounded />
          <i
            className="fas fa-angle-down ml-1"
            style={{ fontSize: "20px" }}
          ></i>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className="p-0">
          <SideNav />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;
