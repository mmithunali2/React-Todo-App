import React from 'react'

import Todos from './Todos'
import NewTodo from './NewTodo'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
const Home = () => {
    const [dummyTodos, setDummyTodos] = useState([]);

    const addTodo = (desc) => {
        setDummyTodos((prevTodos) => {
            return [...dummyTodos, { id: uuidv4(), desc }]
        })
    }
    const removeTodo=(id)=>{
            // const filterTodo=dummyTodos.filter((todo)=>todo.id !==id);
            const filterTodo=dummyTodos.filter((value,index,array)=>{
                return value.id !==id;
            })
            setDummyTodos(filterTodo)
    }

    return (
        <>
            <h1>My Todo App</h1>
            <div className="TodoApp">
                <NewTodo onAddTodo={addTodo} />
                <Todos onRemove={removeTodo}  todos={dummyTodos} />
            </div>
        </>
    )
}

export default Home
