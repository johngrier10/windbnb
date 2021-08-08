import React from 'react'
import './Card.css';
import Host from './Host'
import StayData from '../data/stays.json'

const Card = () => {

  let stay = StayData[2];
  


    return (
        <div className ="card">
          <img alt="loft space" src={stay.photo}/>

          <div className="card--info">
              {
                stay.superHost===true &&
                <Host/>
                }

                <p>
                 {stay.type} 


               {
               stay.beds!==null &&
               <span>.</span>
               }
               {
               stay.beds!==null &&
               stay.beds + " beds"
               }
                </p>
          </div>
        
        
        
        </div>
         

    )
}

export default Card
