import React from "react";
const name = 'Omar Jafor Chowdhury'
function Home(){
    return <div>
        <h2>Full Name: {name} </h2>
        <Todo task='learn react' />
    </div>
}

function Todo({task}){
    return <div>
        <li>Task: {task}</li>
    </div>
}

export default Home;