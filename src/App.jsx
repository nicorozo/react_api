import React, { useEffect, useState } from 'react'
import './components/LeftMenu/LeftMenu.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('')
  const [activeSelector, setActiveSelector] = useState('')
  const [data, setData] = useState([])
  //Endpoint filters
  const [limit, setLimit] = useState('?limit=12')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('&sort=asc')
  const [year, setYear] = useState('2022')

  useEffect(() => {
    if (activeSelector === 'nobelPrizes') {
      setCategory('')
      setSelector('laureates' + limit)
    } else if (activeSelector === 'categories') {
      setCategory('')
      setSelector(`nobelPrizes` + limit)
    }
  }, [activeSelector])

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://api.nobelprize.org/2.1/${selector}${sort}${category}`, options)
      .then((response) => response.json())
      .then((json) => setData(json))


    console.log('App ActiveSelector: ', activeSelector, 'Selector: ', selector)
    console.log('App data #1:', data)
  }, [selector, year, category])


  return (
    <div className='App paddings'>
      <div className="window-container innerWidth padding flexStart ">
        <LeftMenu setCategoryProperty={setCategory} handleSelector={setActiveSelector} >

        </LeftMenu>
        <RightSection apiData={data} activeSelector={activeSelector}>

        </RightSection>
      </div>
    </div>
  )
}

export default App