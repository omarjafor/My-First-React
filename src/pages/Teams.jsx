import React, { useState } from "react";
export default function Team(){
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        setTeam(team+1);
    }
    
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Player: {team} </h3>
            <button onClick={handleAdd}>Add</button> &nbsp;
            <button>Remove</button>
        </div>
    )
}