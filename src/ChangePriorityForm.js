import React, { useState } from "react";


const ChangePriorityForm = ({ setPriority, text, todoList }) => {

    const [formData, setFormData] = useState('1')

    const handleSubmit = (e, newPriority) => {
        e.preventDefault()
        setPriority(text, newPriority)
    }

    const handleChange = (e) => {
        setFormData(e.target.value)
    }

    const selectValues = todoList.map((todo, idx) => {
        return (<option value={`${idx + 1}`}>{idx + 1}</option>)
    })

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e, formData)}>
                <label htmlFor="priority">Priority</label>
                <select
                    id="priority"
                    onChange={handleChange}>
                    {selectValues}
                </select>
                <button>Set Priority</button>
            </form>
        </div>
    )
}

export default ChangePriorityForm;