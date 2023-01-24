"use client"
import React from "react";
import { useState } from "react";

function Index (){
const [userInput, setUserInput] = useState('');

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
    return (
        <div className="w-full mx-auto ">
      
       <form className="w-full flex" >
           <input id="input-text" type="text" value={userInput} onChange={handleChange} className="w-full rounded-lg mx-auto border mr-2 p-2"/>
           <button className="bg-blue-200 border rounded-xl p-2" onClick={handleSubmit}>Masukkan</button>
           
       </form> 
    
   
        </div>
        
    )
}
export default Index;