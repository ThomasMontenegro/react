import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
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
    <Nav className="m-right" >
      <Link to="/" style={{color:"white", textDecoration: "none", margin:"0px 7px" }}>Inicio</Link>
      <Link to="/category/velas" style={{color:"white", textDecoration: "none", margin:"0px 7px" }}>Velas</Link>
      <Link to="/category/almohadones" style={{color:"white", textDecoration: "none", margin:"0px 7px" }}>Almohadones</Link>
      <Link to="/category/mates" style={{color:"white", textDecoration: "none", margin:"0px 10px" }}>Mates</Link>
      <CartWidget/>
    </Nav>
    </Container>
  </Navbar>
    </>
  );
}
