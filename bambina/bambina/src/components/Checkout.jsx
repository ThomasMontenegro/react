import React from 'react';
import { useContext } from 'react';
import { CartContext} from './CartContext';
import { doc, addDoc, collection, getDoc, getFirestore, Timestamp, updateDoc } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function Checkout() {
    const {cart, totalCart, cleanCart, totalItems} = useContext(CartContext)
    const { register, handleSubmit } = useForm();

    const [orderId, setOrderId] = useState()

    const onSubmit = data => {
        const sendOrder = () => {
            const order = {
                buyer:{
                    name: data.Name,
                    email:data.Email,
                    tel:data.Tel,
                    date: Timestamp.fromDate(new Date()),
                },
                items: cart,
                total: totalCart()
            }
            
            const db = getFirestore();
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, order)
            .then((res)=> {
                cart.forEach((item)=>{
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc)=>{
                            updateDoc(docRef, {stock:dbDoc.data().stock-item.number})
                        })
                })
                setOrderId(res.id)
                cleanCart()
            })
            .catch((err) => {
                console.log(err)
            })
        }
        sendOrder()
        }
        
        if (orderId) {
            return (
                <>
                <div>
                    <h2>Gracias por tu compra!</h2>
                    <h3>Tu numero de orden es: </h3>
                    <h3><b>{orderId}</b></h3>
                    <Link to='/'><button className='boton-volver'>Volver</button></Link>
                </div>
                </>
            )
        }
        
        if(cart.length === 0){
            alert('No hay items en el carrito')
            return <Navigate to='/'/>
        }
    
    return (
        <>
            <center>
            <form onSubmit={handleSubmit(onSubmit)} className='checkout'>
                <div className='resumen-compra'>
                    <h3 className='legend'>Resumen de tu compra:</h3>
                    <p className='legend1'>{totalItems()} productos</p>
                    <p className='legend1'>Total a pagar: ${totalCart()}</p>
                </div>
                <legend className='legend'>Ingrese sus datos para finalizar:</legend>
                <input type="text" className="formulario-input" placeholder="Nombre Completo" {...register("Name", {required: true, maxLength: 80})} />
                <input type="text" className="formulario-input" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                <input type="tel" className="formulario-input" placeholder="Mobile number" {...register("Tel", {required: true, minLength: 6, maxLength: 12})} />
                <input type ="submit" className="formulario-submit"/>
            </form>
            </center>       
    </>
    );
}
