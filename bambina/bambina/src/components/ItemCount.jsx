import React from "react";

export default function ItemCount(){
    const [counter, setCounter] = useState(0);

    return(
        <>
        <div className="contador">
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <button onClick={() => setCounter(0)}>Reset</button>
        </div>
        </>
    )
}