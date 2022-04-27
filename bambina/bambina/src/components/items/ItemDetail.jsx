import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext";
import ItemCount from "./ItemCount";
import styles from "./ItemDetail.module.css"

export default function ItemDetail( {id, imagen, nombre, precio, descripcion, stock} ) {
    const [quantity, setQuantity] = useState(0)
    const {addToCart, onCart} = useContext(CartContext)
    
    function handleOnAdd(number){
        setQuantity(number);
        if(onCart(id) === (false)){
            const addItem = {id, imagen, nombre, precio, stock, descripcion, number}
            addToCart(addItem)   
            }    
        }
        console.log(quantity)

    return(
        <>
            <div className={styles.details}>
                <img src={imagen} alt={nombre} className={styles.imgItemDetails} />
                <div>
                <h2>{nombre}</h2>
                <h3>{precio}</h3>
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={0}/>
                </div>
            </div>
        </>
    );

};