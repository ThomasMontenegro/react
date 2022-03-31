import React from "react";
import Greetings from "./Greetings";
import ItemCount from "./ItemCount";

export default function ItemListContainer() {

    return(
        <>
        <div>
        <Greetings name="nuevo usuario"/>
        <ItemCount/>
        </div>
        </>
    );
}
