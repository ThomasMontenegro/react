import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { traerProducto } from "../products";

export default function ItemDetailContainer() {

    const [producto,setProducto]= useState ({})
    const {id} = useParams()


    useEffect(() => {
        traerProducto(id)
            .then((res) => {
                setProducto(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            <ItemDetail {...producto} />
        </>
    );
};