import React from 'react'
import { useState } from 'react'

const NewTodo = (props) => {
    const {onAddTodo}=props;
    const [todo,setTodo]=useState("");
    const changeHandler=(e)=>{
        setTodo(e.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        onAddTodo(todo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="formControl">
                    <input required type="text" value={todo} placeholder="Enter your todo here.." onChange={changeHandler} name="desc" id="desc"/>
                </div>
                <div className="formControl">
                    <button>Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default NewTodo
