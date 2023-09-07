import React from "react";
const name = 'Omar Jafor Chowdhury'
function Home(){
    return <div>
        <h2>Full Name: {name} </h2>
        {/* <Todo task='learn react' /> */}
        {/* <Todos task='Learning JavaScript' isDone={true}/>
        <Todos task='Learning React' isDone={false}/> */}
        <Todos2 task='Learning React' isDone={false}/>
        <Todos2 task='Learning Next' isDone={true}/>
    </div>
}

function Todo({task}){
    return <div>
        <li>Task: {task}</li>
    </div>
}

// function Todos({task, isDone}){
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }else{
//         return <li>Not Finished: {task}</li>
//     }
// }

function Todos2({task, isDone}){
    return(
        <li>{isDone ? 'Finished' : 'Work On'}</li>
    )
}
export default Home;