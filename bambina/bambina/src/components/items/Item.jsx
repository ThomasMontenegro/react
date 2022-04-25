import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Item = ({ product }) => {
    return(  
    <Card style={{ backgroundColor:"pink", width: '10rem' ,padding: "20px"}}>
  <Card.Img variant="top" src={product.imagen} />
  <Card.Body>
    <Card.Title>{product.nombre} </Card.Title>
    <Card.Text>
        ${product.precio}
        <h5 style={{fontSize:"20px"} }>#{product.category}</h5>
        <button style={{backgroundColor:"white"}}><Link to={`/item/${product.id}`} style={{color:"black", textDecoration: "none", fontSize:"40px" }}>ver detalles</Link></button>
    </Card.Text>
  </Card.Body>
</Card>
)  
}


export default Item;