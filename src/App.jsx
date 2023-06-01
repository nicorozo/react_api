import React, { useEffect, useState } from 'react'
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
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  useEffect(() => {
    if (activeSelector === 'nobelPrizes') {
      setCategory('')
      setSelector('laureates' + limit)
    } else if (activeSelector === 'categories') {
      setCategory('')
      setSelector(`nobelPrizes` + limit)
    }

    console.log(yearTo)
  }, [activeSelector, yearTo])

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://api.nobelprize.org/2.1/${selector}${sort}${yearFrom}${yearTo}${category}`, options)
      .then((response) => response.json())
      .then((json) => setData(json))


    console.log('App ActiveSelector: ', activeSelector, 'Selector: ', selector)
    console.log('App data #1:', data)
  }, [selector, yearFrom, yearTo, category])


  return (
    <div className='App paddings flexCenter'>
      <div className="innerWidth padding flexStart window-container  ">
        <LeftMenu
          handleYearsFrom={setYearFrom}
          handleYearsTo={setYearTo}
          setCategoryProperty={setCategory}
          handleSelector={setActiveSelector} />
        <RightSection
          apiData={data}
          activeSelector={activeSelector} />
      </div>
    </div>
  )
}

export default App