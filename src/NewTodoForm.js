import React, { useState } from "react";


const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        text: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    // keep all form data currently in state   (...formData,)
    // add e.target.name : e.target.value ([name]: value)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo({ ...formData })
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Todo Text</label>
                <input
                    type='text'
                    id="text"
                    placeholder="text"
                    name='text'
                    value={formData.text}
                    onChange={handleChange}
                />

                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;