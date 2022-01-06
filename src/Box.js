import React, { useState } from "react";
import './Box.css'

const Box = ({ color = 'grey', width = 100, height = 100, deleteBox }) => {

    // const co

    return (
        <div className="Box-Container">
            <div className="Box"
                style={{ backgroundColor: color, width: width, height: height }}>
                    
            </div>
            <button onClick={deleteBox} className="Box-Btn">Delete Box</button>
        </div>
    )
}

export default Box;