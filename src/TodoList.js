import React, { useState } from "react";

import NewTodoForm from "./NewTodoForm";
import Todo from './Todo'
import { v4 as uuid } from 'uuid'

const TodoList = () => {

    const startingTodos = [
        // { id: uuid() },
        // { id: uuid(), text: 'Take out trash' },
        // { id: uuid(), text: 'Make dinner' },
        // { id: uuid(), text: 'Feed cat' }
    ]

    const [todoList, setTodoList] = useState(startingTodos)

    // keep all todos currently in state, add {newTodo + id}
    const addTodo = (newTodo) => {
        setTodoList(todoList => [...todoList, { ...newTodo, id: uuid() }])
    }

    const deleteTodo = (id) => setTodoList(todoList.filter(todo => todo.id !== id))

    const editTodo = (id, formData) => {
        console.log('id', id)
        console.log('formData', formData)
        console.log('todolist', todoList)

        for (let i = 0; i < todoList.length; i++){
            if (todoList[i].id === id){
                todoList[i].text = formData.text
            }
        }
        setTodoList(todoList)
    }
    return (
        <div >
            <ol>
                {todoList.map(({ text, id }) => {
                    return <Todo
                        text={text}

                        id={id}
                        key={id}
                        deleteTodo={() => deleteTodo(id)} 
                        editTodo={() => editTodo(id)}/>
                })}
            </ol>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;