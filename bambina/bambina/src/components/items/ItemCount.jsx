import React, { useState } from 'react';
import styles from './ItemCount.module.css';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, initial, addCart }) => {
    const [number, setNumber] = useState(initial);

    const agregar = () => {
        number < stock && setNumber(number + 1);
    };

    const descontar = () => {
        number > initial && setNumber(number - 1);
    };

    let numberCart= number >= 1
    
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
            {numberCart? 
            <div>
                <Link to="/cart"><button onClick={() => addCart(number)} className={styles.add}>
                    Agregar al carrito
                </button> </Link>  
            </div> 
            :ItemCount}
        </div>
    );
};

export default ItemCount;