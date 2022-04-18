import React, { useState } from "react";
import ItemCount from "./ItemCount";
import styles from "./ItemDetail.module.css"

export default function ItemDetail( {imagen, nombre, precio, descripcion, stock} ) {
    const [number, setNumber] = useState(0);

    console.log(number)

    const addCart = (cantidad) => {
        setNumber(cantidad);
    };
    return(
        <>
            <div className={styles.details}>
                <img src={imagen} alt={nombre} className={styles.imgItemDetails} />
                <div>
                <h2>{nombre}</h2>
                <h3>{precio}</h3>
                <h4 style={{fontSize:"50px"}}>{descripcion}</h4>
                <ItemCount addCart={addCart} stock={stock} initial={0}/>
                </div>
            </div>
        </>
    );

};