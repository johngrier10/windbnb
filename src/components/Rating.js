import React from 'react'

function Rating(props) {
    return (
        <div className='rating'>

            <p style={{color:'#eb5757'}}>
                
                <span class="material-icons md-16" 
                style={{fontSize:11}} >star</span>
               
                {props.stay.rating}
               
            </p>

        </div>
    )
}

export default Rating
