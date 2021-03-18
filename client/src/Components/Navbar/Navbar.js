import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";

const NAVBAR = () => {
  return (
    <div>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand className="nav" href="#">
            First App
          </Navbar.Brand>
        </Navbar>
      </Container>
    </div>
  );
};

export default NAVBAR;
