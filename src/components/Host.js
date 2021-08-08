import React, { useState } from 'react'
import './Host.css'

const Host = (props) => {
    let superHost=true;
    superHost = props.superHost;
    return (
        <div>{
            superHost===true && 
            <p className="host">super host</p>
            }
        </div>
    )
}

export default Host
