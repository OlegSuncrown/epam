import React from "react";
import { Image, Dropdown, Nav } from "react-bootstrap";
import { SideNav } from "../../components";
import "./dropdown.css";
const DropdownMenu = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Nav.Link
      ref={ref}
      className="btn btn-outline-dark btn-sm border-0 p-0"
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
          <Image
            src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
            fluid
            rounded
            style={{ maxHeight: "40px" }}
          />
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
