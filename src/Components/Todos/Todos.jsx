import React from 'react'

import Todo from './Todo'
const Todos = (props) => {
    const removeTodo=(id)=>{
        props.onRemove(id)
    }
    return (
        <div className="mainBody">
           {props.todos.map((todo)=><Todo key={todo.id} id={todo.id} onRemove={removeTodo} todo={todo.desc} />)}
        </div>
    )
}

export default Todos
