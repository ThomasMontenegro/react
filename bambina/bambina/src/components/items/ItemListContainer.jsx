import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import s from "./ItemListContainer.module.css";
import { collection, getDocs, getFirestore, query, where, orderBy } from 'firebase/firestore';

export default function ItemListContainer() {
    const[products, setProducts] = useState([])
    const {Id} = useParams()

    
    useEffect(()=>{
        const db = getFirestore();
        const productosCollection = query(collection (db, 'productos'), orderBy("precio"))
        const q = Id ? query(collection (db, 'productos'), where('coleccion', '==', Id)) : productosCollection
          
        getDocs(q)
          .then((res) => {setProducts(res.docs.map((doc) => ({id: doc.id,...doc.data()})))
            })
          .catch((err) => {console.log(err)})
      },[Id])


    return(
        <>
         <div className={s.items}>
        <ItemList products={products}/>
        </div>
        </>
    );
}

