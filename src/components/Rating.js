import React from 'react'

function Rating(props) {
    return (
        <div className='rating'>

            <p style={{color:'rgb(255 162 162)'}}>
                
                <span class="material-icons md-16" 
                style={{fontSize:11}} >star</span>
               
                {props.stay.rating}
               
            </p>

        </div>
    )
}

export default Rating
