import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styles from './Item.module.css';

const Item = ({ product }) => {
    return(  
      <Container fluid>
    <Card style={{ backgroundColor:"pink", width: '8rem' ,padding: "20px" ,display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
  <Card.Img variant="top" src={product.imagen} style={{height:"250px"}}/>
  <Card.Body>
    <Card.Title style={{fontSize:"40px"}}>{product.nombre} </Card.Title>
    <Card.Text>
        ${product.precio}
        <button className={ styles.button}><Link to={`/item/${product.id}`} style={{color:"black", textDecoration: "none", fontSize:"25px" }}>ver detalles</Link></button>
    </Card.Text>
  </Card.Body>
</Card>
</Container>
)  
}


export default Item;