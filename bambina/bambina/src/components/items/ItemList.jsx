import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return ( 
       
        products.map((producto) => (
            
                <Item key={producto.id} product={producto}/>
            ))
            );
        
        };
        
        export default ItemList;