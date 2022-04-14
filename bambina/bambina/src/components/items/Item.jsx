import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import productos from "../productos";

export default function Item({id, nombre, precio, imagen }){
    return(  
    <Card key={id} style={{ backgroundColor:"pink", width: '10rem' ,padding: "20px"}}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre} </Card.Title>
    <Card.Text>
        {precio}
        <button style={{backgroundColor:"white"}}><Link to={`/item/${productos.id}`} style={{color:"black", textDecoration: "none", fontSize:"40px" }}>ver detalles</Link></button>
    </Card.Text>
    <ItemCount/>
  </Card.Body>
</Card>
)  
}