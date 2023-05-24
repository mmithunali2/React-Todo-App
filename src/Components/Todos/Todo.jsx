import React from 'react'

const Todo = (props) => {
    const {id,todo,onRemove}=props;
    const handleClick=(id)=>{
       onRemove(id)
    }
    return (
        <div className="todoBody">
            <h3>{todo}</h3>
            <span onClick={()=>{handleClick(id)}}>x</span>
        </div>
    )
}

export default Todo
