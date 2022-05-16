import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
    return ( 
       
        products.map((producto) => (
                <div className={{display:"flex",flexWrap:"wrap"}}>
                <Item key={producto.id} product={producto}/>
                </div>
            ))
            );
        
        };
        
        export default ItemList;