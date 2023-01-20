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
        <div className="w-full mx-auto ">
      
       <form className="w-full flex" >
           <input id="input-text" type="text" value={userInput} onChange={handleChange} className="w-full rounded-lg mx-auto border mr-2 p-2"/><button className="bg-blue-200 border rounded-xl p-2" onClick={handleSubmit}>Masukkan</button>
           
       </form> 
    
       <ul>
          {
              todoList.length >=1 ? todoList.map((todo,id)=>{
                  return <li className="p-2" key={id}><span className="mr-2 text-sm">{todo}</span>
                  <button className="bg-slate-300 font-normal text-base text-red-700 p-2 rounded-sm" onClick={(el)=>{
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