import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from "./logo-bambina.png";



export default function NavBarr() {
  return (
    <>
  <Navbar variant="dark" style={{ backgroundColor: "#ff3e99" }}>
    <Container fluid>
         <img src={logo} className="logo"/>
    <Navbar.Brand href="#home">Bambina Disegno</Navbar.Brand>
    <Nav className="m-right">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mates</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Velas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Almohadones</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link>Nosotros</Nav.Link>
      <Nav.Link>Carrito</Nav.Link>
      <CartWidget/>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
