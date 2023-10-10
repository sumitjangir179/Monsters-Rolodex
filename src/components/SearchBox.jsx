import { React, useState } from 'react'
import './searchBox.css'

const SearchBox = ({onChangeHandler}) => {
    
    return (
        <div className='searchBoxContainer'>
            <input type='search' placeholder='Search' onChange={onChangeHandler} />
        </div>
    )
}

export default SearchBox