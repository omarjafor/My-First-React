import React from "react";

export default function Friend({friend}){
    const {name, email} = friend;
    let isRed = true;
    return(
        <div className={`card-container ${ isRed? 'red': 'blue'}`}>
            <h4>Name : {name} </h4>
            <h5>Email : {email} </h5>
        </div>
    )
}