import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('')
  const [activeSelector, setActiveSelector] = useState('')
  const [data, setData] = useState([])
  //Endpoint filters
  const [limit, setLimit] = useState('?limit=9')
  const [sort, setSort] = useState('&sort=asc')
  const [offset, setOffset] = useState(0)
  const [category, setCategory] = useState('')
  const [yearFrom, setYearFrom] = useState('')
  const [yearTo, setYearTo] = useState('')

  const previousButton = () => {
    if (offset >= 9) {
      setOffset((n) => n - 9)
    }
  }
  const nextButton = () => {
    if (offset <= 72) {
      setOffset((n) => n + 9)
    }
  }

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

    fetch(`https://api.nobelprize.org/2.1/${selector}&offset=${offset}${sort}${yearFrom}${yearTo}${category}`, options)
      .then((response) => response.json())
      .then((json) => setData(json))


    console.log('App ActiveSelector: ', activeSelector, 'Selector: ', selector)
    console.log('App data #1:', data)
  }, [selector, yearFrom, yearTo, category, offset])

  return (
    <div className='App'>
      <section className='innerWidth window-section '>
        <Navbar />
        <div className=" window-container">
          <LeftMenu
            handleYearsFrom={setYearFrom}
            handleYearsTo={setYearTo}
            setCategoryProperty={setCategory}
            handleSelector={setActiveSelector}
            nextButton={nextButton}
            previousButton={previousButton}
            offset={offset} />
          <RightSection
            apiData={data}
            activeSelector={activeSelector} />
        </div>
      </section>
    </div>
  )
}

export default App