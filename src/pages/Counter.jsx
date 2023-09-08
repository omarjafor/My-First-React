import React from "react";
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count+1);
    }
    const handleRemove = () =>{
        setCount(count-1);
    }
    return(
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add </button> &nbsp;
            <button onClick={handleRemove}> Remove</button>
        </div>
    )
}