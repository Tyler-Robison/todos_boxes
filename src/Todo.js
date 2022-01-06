import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import './Todo.css'

const Todo = ({ text = 'Be Cool', deleteTodo, editTodo, id, isShowing = false }) => {

    const classes = `${isShowing ? "Form-Showing" : "Form-Hidden"}`

    const showEditForm = () => {

    }


    return (
        <div className="Box-Container">
            <li style={{ fontSize: '20px' }}>
                {text}
            </li>

            <button onClick={showEditForm}>Edit</button>
            <EditTodoForm editTodo={() => editTodo(id)} />
            <button onClick={deleteTodo}>Delete Todo</button>

            

        </div>
    )
}

export default Todo;