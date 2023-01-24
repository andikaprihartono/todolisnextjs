import React from "react";
import { isPropertySignature } from "typescript";

function TodoList(props){
    return(
       <ul className="TodoList">
{props.children}
       </ul> 
    )
}

export default TodoList;