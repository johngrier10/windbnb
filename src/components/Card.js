import React from 'react'
import './Card.css';
import Host from './Host'

const Card = () => {
    return (
        <div className ="card">
          <img alt="loft space" src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"></img>  

          <div className="card--info">
              <Host superHost={true}/>
          </div>
        
        
        
        </div>
         

    )
}

export default Card
