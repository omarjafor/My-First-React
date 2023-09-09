import React, { useState } from "react"
import './Picture.css'
export default function Picture(){
    const [className, setClassName] = useState('oldClass')
    const changeBackground = () =>{
        if(className == 'oldClass'){
            setClassName('newClass')
        }else{
            setClassName('oldClass')
        }
    }
    return (
        <div className={className}>
            <img className="picture" src="https://images.unsplash.com/photo-1599508704512-2f19efd1e35f" alt="" onClick={changeBackground} />
        </div>
    )
}