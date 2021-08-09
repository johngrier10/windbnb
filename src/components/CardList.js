import React from 'react';
import StayData from '../data/stays.json'
import Card from './Card'


function CardList() {
    return (
        <div>
            {StayData.map((stayDetail, index)=>{
                return <Card StayData={StayData}/>
            })}
        </div>
    )
}

export default CardList
