import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";


export default function App() {
  return (
    <>
  <Navbar variant="dark" style={{ backgroundColor: "#EC407A" }}>
    <Container style={{ backgroundColor: "#EC407A" }}>
    <Navbar.Brand href="#home">Bambina Disegno</Navbar.Brand>
    <Nav className="m-right">
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

