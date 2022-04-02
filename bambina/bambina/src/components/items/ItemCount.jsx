import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ItemCount(){
    const [counter, setCounter] = useState(0);

    return(
        <>
        <div>
            <div className="d-flex justify-content-center">{counter}</div>
            <button onClick={() => setCounter(counter - 1)} className= "btn-izq">-</button>
            <button onClick={() => setCounter(0)} className= "btn-cen">Reset</button>
            <button onClick={() => setCounter(counter + 1)} className= "btn-der">+</button>
        </div>
        </>
    )
}