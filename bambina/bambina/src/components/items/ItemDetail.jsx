import React from "react";
import styles from "./ItemDetail.module.css"

export default function ItemDetail({product}) {
    return(
        <>
            <div className={styles.details}>
                <img src={product.imagen} alt={product.nombre} className={styles.imgItemDetails} />
                <div>
                <h2>{product.nombre}</h2>
                <h3>{product.precio}</h3>
                <h4 style={{fontSize:"50px"}}>{product.descripcion}</h4>
                </div>
            </div>
        </>
    );

};