import React, { useState } from "react";


const EditTodoForm = ({ editTodo, id }) => {
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
        console.log('submit form data', { ...formData})
        editTodo(id, { ...formData })
        setFormData(INITIAL_STATE)
    }

    // have current text be placeholder
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="edit-text">New Text</label>
                <input
                    type='text'
                    id="edit-text"
                    // placeholder="text"
                    name='text'
                    value={formData.text}
                    onChange={handleChange}
                />

                <button>Edit Todo</button>
            </form>
        </div>
    )
}

export default EditTodoForm;