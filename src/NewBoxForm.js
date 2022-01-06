import React, { useState } from "react";
import './NewBoxForm.css'

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        height: '',
        width: '',
        color: ''
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
        console.log('formData', formData)
        addBox({ ...formData })
        setFormData(INITIAL_STATE)
    }

    // const addBox = (newBox) => {
    //     // forms always output strs
    //     newBox.width = +newBox.width
    //     newBox.height = +newBox.height
    //     console.log('new box', newBox)
    //     setBoxList(boxList => [...boxList, {...newBox, id: uuid()}])
    //     console.log(boxList)
    // }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Color</label>
                <input
                    type='text'
                    id="color"
                    placeholder="color"
                    name='color'
                    value={formData.color}
                    onChange={handleChange}
                />

                <label htmlFor="height">Height</label>
                <input
                    type='text'
                    id="height"
                    placeholder="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />

                <label htmlFor="width">Width</label>
                <input
                    type='text'
                    id="width"
                    placeholder="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <button>Add Box</button>
            </form>
        </div>
    )
}

export default NewBoxForm;