import React from "react";
import styles from "./ItemDetail.module.css"


export default function ItemDetail({producto}) {
    return(
        <>
            <div className={styles.details}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.imgItemDetails} />
                <div>
                <h2>{producto.nombre}</h2>
                <h3>{producto.precio}</h3>
                <h4 style={{fontSize:"50px"}}>{producto.descripcion}</h4>
                </div>
            </div>
        </>
    );

};