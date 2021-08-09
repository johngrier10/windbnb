import React from 'react'
import './Card.css';
import Host from './Host'
import Description from './Description';
import StayData from '../data/stays.json'
import Rating from './Rating';

const Card = (props) => {

  



    return (




        <div className ="cardList">
          {StayData.map((detail, index)=>{
            return <div className="card">
              <img src={detail.photo} alt={detail.title} />
                <div className="card--info">
                    {
                      detail.superHost===true &&
                      <Host/>
                      }
                    <Description stay={detail} style={{color:'blue'}}/>
                    <Rating stay={detail}/>   
                  </div>

            </div>       
          
          
          
          
          })}
        
        </div>
        
        
         

    )
}

export default Card
