import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const SideNav = () => {
  return (
    <div className="p-0 shadow" lg={12} sm={12}>
      <Button
        variant="flat m-0"
        size="xxl"
        className="w-100"
        exact
        to="/dashboard"
        as={NavLink}
        block
      >
        <i className="fas fa-user-circle mr-3"></i>
        Profile
      </Button>
      <Button
        variant="flat m-0"
        size="xxl"
        to="/dashboard/user-goals"
        as={NavLink}
        block
      >
        <i className="fas fa-dot-circle mr-3"></i>
        My Goals
      </Button>
      <Button
        variant="flat m-0"
        size="xxl"
        to="/dashboard/seasonal-goals"
        as={NavLink}
        block
      >
        <i className="fas fa-globe mr-3"></i>
        Season Goals
      </Button>
      <Button
        variant="flat m-0"
        size="xxl"
        to="/dashboard/add-goal/1"
        as={NavLink}
        block
      >
        <i className="fas fa-plus-circle mr-3"></i>
        Add New Goal
      </Button>
      <Button
        variant="flat m-0"
        size="xxl"
        to="/dashboard/user-bages"
        as={NavLink}
        block
      >
        <i className="fas fa-trophy mr-3"></i>
        Your Awards
      </Button>
    </div>
  );
};

export default SideNav;
