import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import './BoxList.css'
import { v4 as uuid } from 'uuid'

const BoxList = () => {

    const startingBoxes = [
        // {id: uuid()},
        // { id: uuid(), color: 'red', height: 150, width: 80 }
    ]

    const [boxList, setBoxList] = useState(startingBoxes)

    // keep all boxes currently in state, add {newBox + id}
    const addBox = (newBox) => {
        // forms always output strs
        newBox.width = +newBox.width
        newBox.height = +newBox.height
        console.log('new box', newBox)
        setBoxList(boxList => [...boxList, {...newBox, id: uuid()}])
        console.log(boxList)
    }

    const deleteBox = (id) => setBoxList(boxList.filter(box => box.id !== id))
    

    return (
        <div className="BoxList-Main">
            <div className="BoxList-Container">
                {boxList.map(({ color, height, width, id }) => {
                    return <Box
                        color={color}
                        height={height}
                        width={width}
                        // id={id}
                        key={id}
                        deleteBox={() => deleteBox(id)} />
                })}
            </div>
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;