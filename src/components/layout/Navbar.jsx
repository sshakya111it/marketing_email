import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Custom.css';

export default function Appbar() {
  return (
    <div>
      <container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand className=" Brand "href="/">111IT Email Marketing</Navbar.Brand>
          <Nav className="NavItems">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/addproduct">
              Add Product
            </NavLink>
            <NavLink className="nav-link" to="/addcustomer">
              Add Customer
            </NavLink>
            <NavLink className="nav-link" to="/signout">
              Sign Out
            </NavLink>
          </Nav>
        </Navbar>
      </container>
    </div>
  );
}
