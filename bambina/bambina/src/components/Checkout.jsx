import React, { useState } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"
import { useContext } from 'react';
import { CartContext} from './CartContext';
import {collection,addDoc, getFirestore} from "firebase/firestore"
export  default function Cart() {

    const {cart,totalCart} = useContext(CartContext)

    const [name, setName] =   useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();

   function  terminarCompra () {

    const db = getFirestore();
    const Orders =collection(db,"orders");
    

    let buyer = {
        buyer: { name, phone, email },
        items: cart,
        total: totalCart(),
    }; 

    addDoc(Orders,buyer).then(({id}) => {
        console.log(id)
    })

    alert("Tu pedido se ha registrado" + "\n"+ name +"\n"+ email +"\n" +phone);
    }
    
    return(
        <>

        <p className="d-flex justify-content-center">Pone tus datos para finalizar la compra</p>
        <Form className="d-flex justify-content-center">
            
            <input placeholder={"Nombre y apellido"}  type={"text"} value={name}
            onChange={(e) => {setName(e.currentTarget.value);}}/>

            <input placeholder={"E-mail"} type={"email"} value={email}
            onChange={(e) => {setEmail(e.currentTarget.value);}}/>

            <input placeholder={"Numero de Celular"} type={"number"} value={phone}
            onChange={(e) => {setPhone(e.currentTarget.value);}}/>
        </Form>
            <Form className="d-flex justify-content-center">
                  <Button style={{color: "white", backgroundColor:"#ff3e99", borderColor:"pink", marginTop:"50px"}} onClick={terminarCompra}>Finalizar Comprar</Button>
             </Form>
        </>
    )
   
   
}