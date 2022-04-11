import React, { useEffect, useState } from "react";
import Fetch from "../Fetch";
import { product } from "../productos";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {

    const [producto,setProducto]= useState ({})

    useEffect(() => {
        Fetch(2000, product)
        .then((res) => {
            setProducto(res)
        })
    }, [producto])

    return(
        <>  
            <ItemDetail product={product} />
        </>
    );

};  