import React from "react";

function TodoForm(props){
    return(
        <div className="w-full mx-auto ">
            <form className="w-full flex TodoForm" onSubmit={props.onSubmit}>
            <input type="text" value={props.value} onChange={props.onChange} ref={props.references}  className="w-full rounded-lg mx-auto border mr-2 p-2 form-input"/>
          
            <button className="bg-blue-200 border rounded-xl p-2 btn-submit" type="submit">Masukkan</button>

          

            </form>
        </div>
    )
}

export default TodoForm;