import React, { useState } from "react";
import { Container, Image, Dropdown, FormControl, Nav } from "react-bootstrap";
import { SideBar } from "../../components";
import "./dropdown.css";
const DropdownMenu = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Nav.Link
      ref={ref}
      className="btn btn-outline-secondary btn-sm p-0 px-3"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <i className="fas fa-chevron-down"></i>

      {children}
    </Nav.Link>
  ));

  return (
    <Dropdown className="d-lg-none">
      <Dropdown.Toggle
        as={CustomToggle}
        id="dropdown-custom-components"
      ></Dropdown.Toggle>

      <Dropdown.Menu>
        <SideBar />
      </Dropdown.Menu>
    </Dropdown>
    // <DropdownButton title='Menu' menuAlign='right' variant='outline-secondary border-0' className='d-lg-none'>
    //   <Dropdown.Item className='p-0 m-0 '>
    //     <SideBar />
    //   </Dropdown.Item>
    // </DropdownButton>
  );
};

export default DropdownMenu;
