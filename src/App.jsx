import { React, useState, useEffect } from 'react'
import Title from './components/Title'
import SearchBox from './components/SearchBox'
import CardList from './components/CardList'
import './App.css'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])
  const [searchField,setSearchField] = useState('')


  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(data)
      } catch (error) {
        console.log(`Error in fetchData ${error}`)
      }
    }
    getData()
  }, [])
  

  const onChangeHandler  = (e) => {
     setSearchField(e.target.value)
  }

  const filterMoster = data.filter((moster) => 
     moster.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <section>
      <div className='container'>
        <Title />
        <SearchBox onChangeHandler = {onChangeHandler} />
        <CardList value={filterMoster} />
      </div>
    </section>
  )
}

export default App