import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";


export default function NavBar() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Bambina Disegno</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Mates</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Velas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Almohadones</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Ayuda</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
