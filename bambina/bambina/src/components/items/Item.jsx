import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";


export default function Item({id, nombre, precio, imagen }){
    return(  
    <Card key={id} style={{ width: '10rem' ,padding: "20px"}}>
  <Card.Img variant="top" src={imagen} />
  <Card.Body>
    <Card.Title>{nombre} </Card.Title>
    <Card.Text>
        {precio}
    </Card.Text>
    <ItemCount/>
  </Card.Body>
</Card>
)  
}