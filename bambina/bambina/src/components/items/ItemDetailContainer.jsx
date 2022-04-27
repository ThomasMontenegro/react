import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer() {

    const [producto,setProducto]= useState ([])
    const {id} = useParams()


    useEffect(() => {
        const db = getFirestore()
    const productosRef = doc(db, 'productos', id)
    getDoc(productosRef)
      .then((doc) => {setProducto({id: doc.id, ...doc.data()})
      })
      .catch((err) => {console.log(err)
      })
  },[id])
    return (
        <>
            <ItemDetail {...producto} />
        </>
    );
};