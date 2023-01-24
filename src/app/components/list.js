"use client"
import React from "react";
import { useState } from "react";

function List (){

const [todoList, setTodoList] = useState([]);

const deleteItem = (todo)=>{
    const itemFilter = todoList.filter(todoItem => todoList.indexOf(todoItem) != todoList.indexOf(todo));
    setTodoList(itemFilter);
}

    return (
        <div className="w-full mx-auto ">
               
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
export default List;