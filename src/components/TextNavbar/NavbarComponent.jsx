import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

const UtilityNavbar = ({ brandText }) => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        className="Nav"
      >
        <div className="d-flex w-100" id="Container">
          <Link className="navbar-brand" to="/">
            <h2 id="NavbarName">{brandText}</h2>
          </Link>
          <Nav id="NavbarElements">
            <Link to="/" className="hidden-link">
              Home
            </Link>
            <Link to="/about" className="hidden-link">
              About
            </Link>
          </Nav>
        </div>
      </Navbar>
    </>
  );
};
export default UtilityNavbar;
