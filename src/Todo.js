import React, { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import ChangePriorityForm from "./ChangePriorityForm";
import './Todo.css'

const Todo = ({ text = 'Be Cool', deleteTodo, editTodo, id, todoList, setPriority }) => {
    // need todoList for changing priority. 

    const [showForm, setShowForm] = useState(false)
    const [todoCompleted, setTodoCompleted] = useState(false)
    const isCompleted = todoCompleted ? 'line-through' : 'none';

    const showEditForm = () => {
        if (!showForm) setShowForm(true)
        else { setShowForm(false) }
    }

    const completeTodo = () => {
        if (todoCompleted) setTodoCompleted(false)
        else { setTodoCompleted(true) }
    }

    return (
        <div className="Box-Container">
            <li style={{ fontSize: '20px', textDecoration: `${isCompleted}` }}>
                {text}
                <button onClick={completeTodo}>Complete Todo</button>
                <ChangePriorityForm
                    text={text}
                    todoList={todoList}
                    setPriority={setPriority} />
            </li>

            <button onClick={showEditForm}>Edit</button>

            {/* passsing in editTodo as a cb prevents invoking
            if passing in again can remove cb? */}
            {showForm && <EditTodoForm editTodo={editTodo} id={id} showEditForm={showEditForm} placeholder={text} />}

            <button onClick={deleteTodo}>Delete Todo</button>

        </div>
    )
}

export default Todo;