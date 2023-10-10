import React from 'react'
import './card.css'

const Card = ({ value }) => {
    const { name, email } = value
    return (
        <div className='box'>
            <img src="https://robohash.org/620050a4db5104bae758cd75171d64?set=set2" alt="Monster" />
            <h5 className='boxTitle'>{name}</h5>
            <p className='subboxTitle'>{email}</p>
        </div>
    )
}

export default Card