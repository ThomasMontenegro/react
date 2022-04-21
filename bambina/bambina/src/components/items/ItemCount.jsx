import React, { useState } from 'react';
import styles from './ItemCount.module.css';
import { Link } from 'react-router-dom';


const ItemCount = ({ stock, initial, onAdd }) => {
    const [number, setNumber] = useState(initial);

    const agregar = () => {
        number < stock && setNumber(number + 1);
    };

    const descontar = () => {
        number > initial && setNumber(number - 1);
    };
    

    return (
        <div className={styles.containerCount}>
            <div className={styles.containerButton}>
            <button disabled={number === initial} onClick={descontar}>
                    -
                </button>
                <p className={styles.number}>{number}</p>
                <button disabled={number === stock} onClick={agregar}>
                    +
                </button>
            </div>
            <div>
                <Link to="/cart"><button onClick={()=>onAdd(number)} className={styles.add}>
                    Agregar al carrito
                </button> </Link>  
            </div> 
        </div>
    );
};

export default ItemCount;