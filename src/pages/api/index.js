"use client"
import React from "react";
import { useState } from "react";

function Index (){
const [userInput, setUserInput] = useState('');
const [todoList, setTodoList] = useState([]);
// const inputText = document.getElementById("input-text");

const handleChange = (el) =>{
    el.preventDefault()
    setUserInput(el.target.value)
   
}




const handleSubmit = (el) =>{
     el.preventDefault()

    setTodoList([
        userInput,
        ...todoList
    ])
    setUserInput('')
}

const deleteItem = (todo)=>{
    const itemFilter = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));
    setTodoList(itemFilter);
}

    return (
        <div>
       <h2>Todo List Next JS</h2>
       <form>
           <input id="input-text" type="text" value={userInput} onChange={handleChange}/><button onClick={handleSubmit}>Masukkan</button>
           <p>sdufdsgiuofgdsifhesipryesr7uiewy</p>
       </form> 
    
       <ul>
          {
              todoList.length >=1 ? todoList.map((todo,id)=>{
                  return <li key={id}>{todo}
                  <button onClick={(el)=>{
                      el.preventDefault()
                      deleteItem(todo)
                  }}>Delete</button>
                  </li>
              })
              :' '
          } 
       </ul>
        </div>
        
    )
}
export default Index;