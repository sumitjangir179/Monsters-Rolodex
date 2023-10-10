import React from 'react'
import Card from './Card'
import './cardList.css'

const CardList = ({ value }) => {
    return (
        <div className='boxContainer'>
            {
                value.map((itr) => { return <Card key={itr.id} value = {itr} /> })
            }
        </div>
    )
}

export default CardList