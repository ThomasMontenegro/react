import React, { useEffect, useState } from "react";
import Fetch from "../Fetch";
import productos from "../productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css";

export default function ItemListContainer() {
    const [items, setItems] = useState ([]);

    useEffect(() => {
        Fetch(3000, productos)
        .then (res => setItems(res))
        .catch(error => console.log (error))
    }, [items])


    return(
        <>
         <div className={s.items}>
        <ItemList productos={items}/>
        </div>
        </>
    );
}
