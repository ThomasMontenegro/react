import React from 'react';
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {BsTrash} from "react-icons/bs";

export default function Cart() {
    const {cart, cleanCart, removeFromCart, cartPrice} = useContext(CartContext)
    
    
    
    return (
    <>
        {
        cartPrice() === 0 
        ?   <div>
                <h1>El carrito está vacío</h1>
                <div>
                    <Link to='/'><button>Volver a la tienda</button></Link>
                </div>
            </div>
        :   <div>
                <h1 style={{display: 'flex', justifyContent: 'center'}}>Carrito</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                {cart.map((item) => ( 
                    <Card >
                        <div>
                            <div style={{width:"200px", margin:"auto", marginTop:"20px"}}>
                                <Card.Img variant="top" src={item.imagen} alt='imagen'/>
                            </div>
                        <div>
                            <Card.Body style={{display: 'flex', justifyContent: 'center'}}>
                                <Card.Title><b>{item.nombre}</b></Card.Title>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cantidad: {item.number}</ListGroupItem>
                                <ListGroupItem>Precio por unidad: {item.precio} </ListGroupItem>
                            </ListGroup>
                        </div>
                        <button  onClick = {()=>removeFromCart(item.id)}><BsTrash className='icono-trash'/></button>
                        </div>
                    </Card> 
                ))}  
                </div>
               { console.log(cartPrice())}
            <h1  style={{display: 'flex', justifyContent: 'center'}}>Total ${cartPrice()}</h1>
            <div  style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <button onClick = {cleanCart}>Vaciar Carrito</button>
                <button ><b>Finalizar Compra</b></button>
                <Link to='/'><button>Seguir comprando</button></Link>
            </div>
            </div>
            }
    </>
    );
}