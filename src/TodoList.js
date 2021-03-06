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

    // const editTodo = (id, formData) => {
    //     console.log('id', id)
    //     console.log('formData', formData)
    //     console.log('todolist', todoList)

    //     for (let i = 0; i < todoList.length; i++){
    //         if (todoList[i].id === id){
    //             todoList[i].text = formData.text
    //         }
    //     }
    //     setTodoList(todoList)
    // }

    const editTodo = (id, formData) => {

        setTodoList(todos => todos.map(todo =>
            todo.id === id ? { ...todo, text: formData.text } : todo
        ))
    }

    const moveElement = (arr, fromIdx, toIdx) => {
        const element = arr[fromIdx];
        arr.splice(fromIdx, 1);
        arr.splice(toIdx, 0, element);
    }

    const findIdx = (arr, txtToMatch) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].text === txtToMatch) return i
        }
    }

    const setPriority = (todoTxt, newPriority = 1) => {
        // idx = form select val - 1
        const adjustedPriority = newPriority - 1;
        const todoIdx = findIdx(todoList, todoTxt)

        moveElement(todoList, todoIdx, adjustedPriority)
        const newList = JSON.parse(JSON.stringify(todoList));

        setTodoList(newList)
    }

    return (
        <div >
            <ol>
                {todoList.map(({ text, id }) => {
                    return <Todo
                        text={text}
                        todoList={todoList}
                        id={id}
                        key={id}
                        deleteTodo={() => deleteTodo(id)}
                        editTodo={editTodo}
                        setPriority={setPriority}
                    />
                })}
            </ol>
            <NewTodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoList;