import React from 'react'
import './Description.css';


function Description(props) {
    return (
        <div className='description'>
               {props.stay.type} 

               {
                props.stay.beds!==null &&
                <span>.</span>
                }
                                {
                props.stay.beds!==null &&
                props.stay.beds + " beds"
                }
        </div>
    )
}

export default Description
