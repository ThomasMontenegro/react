import React, { useEffect, useState } from "react";
import FetchDetail  from "../Fetch";
import productos from "../productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const [producto,setProducto]= useState ({})
    const {id} = useParams()


    useEffect(() => {
        FetchDetail(id)
        .then((res) => {
            setProducto(res)
        })
    }, [id])

    return(
        <>  
            <ItemDetail product={producto} />
        </>
    );

};  