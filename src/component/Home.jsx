import React from "react";
import Counter from "./Counter";
import Team from "./Teams";
const name = 'Omar Jafor Chowdhury'
function Home(){
    const actors = ['Shakib', 'Hongsu Raj', 'Jayed Khan', 'Salman Khan']
    const singers =[
        {name:'Jokkor Bokkor', age:56},
        {name:'Zonko', age:35},
        {name:'Panka Pola', age:48},
        {name:'Imran Khan', age:29}
    ]
    return <div>
        {/* {
            singers.map(singer => <Singer singer={singer} />)
        }
        <Actor name='Salman Khan'/>
        {
            actors.map(actor => <Actor name={actor}/>)
        } */}
        <Team/>
        <Counter/>
        <h2>Full Name: {name} </h2>
        {/* <Todo task='learn react' />
       <Todos task='Learning JavaScript' isDone={true}/>
        <Todos task='Learning React' isDone={false}/>
        <Todos2 task='Learning React' isDone={false}/>
        <Todos2 task='Learning Next' isDone={true}/> */}
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
        // <li>{isDone ? 'Finished' : 'Work On'}</li>
        <li>{isDone && task}</li>
        // <li>{isDone || task}</li>
    )
}

function Actor({name}){
    return <li>Name : {name}</li>
}
function Singer({ singer }) {
    return <div>
        <li>Name : {singer.name}</li>
        <li>Age : {singer.age}</li>
    </div>
}

export default Home;