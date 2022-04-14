import React, { useEffect, useState } from "react";
import Fetch from "../Fetch";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer() {
    const [items, setItems] = useState ([]);
    const {categoryId} = useParams()

    
    useEffect(() => {
        Fetch(categoryId)
        .then (res => setItems(res))
        .catch(error => console.log (error))
    }, [categoryId])


    return(
        <>
         <div className={s.items}>
        <ItemList productos={items}/>
        </div>
        </>
    );
}
