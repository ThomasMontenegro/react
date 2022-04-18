import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import s from "./ItemListContainer.module.css";
import { traerProductos } from "../products";

export default function ItemListContainer() {
    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams()

    
    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => setProducts(res))
            .catch((error) => console.log(error))
}, [categoryId]);


    return(
        <>
         <div className={s.items}>
        <ItemList products={products}/>
        </div>
        </>
    );
}
