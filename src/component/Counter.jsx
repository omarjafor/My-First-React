import React, { useEffect } from "react";
import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        setCount(count+1);
    }
    const handleRemove = () =>{
        if(count>0){
            setCount(count - 1);
        }
    }
    return(
        <div style={{border:'2px solid gray', padding:'10px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add </button> &nbsp;
            <button onClick={handleRemove}> Remove</button>
        </div>
    )
}