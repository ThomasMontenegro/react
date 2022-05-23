import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import s from "./ItemListContainer.module.css";
import { collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

export default function ItemListContainer() {
    const[products, setProducts] = useState([])
    const {categoryId} = useParams()

    
    useEffect(()=>{
        const db = getFirestore();
        let productosRef;
    if (!categoryId) {
      productosRef = collection(db, 'productos');
    } else {
      productosRef = query(collection(db, 'productos'), where('category', '==', categoryId));
    }

    getDocs(productosRef).then((res) => {
      setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
    });
  }, [categoryId]);

    return(
        <>
       
         <div className={s.items}>
        <ItemList products={products}  className={s.list}/>
        </div>
        </>
    );
}

