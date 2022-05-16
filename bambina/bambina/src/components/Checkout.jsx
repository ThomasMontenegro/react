import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useContext } from 'react';
import { CartContext} from './CartContext';
import {collection,addDoc, getFirestore, Timestamp} from "firebase/firestore"
export  default function Cart() {

    const {cart,totalCart, totalItems} = useContext(CartContext)

    const [name, setName] =   useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

   function  terminarCompra () {

    const db = getFirestore();
    const Orders =collection(db,"orders");
    

    let buyer = {
        buyer: { name, phone, email },
        items: parseInt(cart),
        totalItems: totalItems(),
        total: "$" + totalCart(),
         date: Timestamp.fromDate(new Date()),
    }; 

    addDoc(Orders,buyer).then(({id}) => {
        console.log(id)
    })
    
    alert("Tu pedido se fue registrado" + " " + name );
    }
    

    
    return(
        <>

        <p className="d-flex justify-content-center">Necesitamos tus datos para finalizar la compra</p>
        <Form className="d-flex justify-content-center">
            
            <input placeholder={"Nombre y apellido"}  type={"text"} value={name} pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
            onChange={(e) => {setName(e.currentTarget.value);}}/>

            <input placeholder={"E-mail"} type={"email"} value={email} pattern={"^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z0-9-]+)$"}
            onChange={(e) => {setEmail(e.currentTarget.value);}}/>

            <input placeholder={"Numero de Celular"} type={"number"} value={phone} pattern={"^([0-9])*$"}
            onChange={(e) => {setPhone(e.currentTarget.value);}}/>
        </Form>
            <Form className="d-flex justify-content-center" >
                  <Button style={{color: "white", backgroundColor:"#ff3e99", borderColor:"pink", marginTop:"50px"}} onClick={terminarCompra}>Finalizar Comprar</Button>
             </Form>
        </>
    )
   
   
}