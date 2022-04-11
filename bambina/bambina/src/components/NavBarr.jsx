import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from "./logo-bambina.png";
import { Link } from "react-router-dom";


export default function NavBarr() {
  return (
    <>
  <Navbar variant="dark" style={{ backgroundColor: "#ff3e99" }}>
    <Container fluid>
   <Link to={"/"}><img src={logo} className="logo"/></Link>
    <Navbar.Brand href="#home">Bambina Disegno</Navbar.Brand>
    <Nav className="m-right">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link>Velas</Nav.Link>
      <Nav.Link>Mates</Nav.Link>
      <Nav.Link>Almohadones</Nav.Link>
      <CartWidget/>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
