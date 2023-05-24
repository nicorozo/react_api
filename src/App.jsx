import React, { useEffect, useState } from 'react'
import './components/LeftMenu/LeftMenu.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('')
  const [category, setCategory] = useState('che')
  const [year, setYear] = useState('2022')
  const [data, setData] = useState([])
  const [activeSelector, setActiveSelector] = useState('')

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    if (activeSelector === 'nobelPrizes') {
      setSelector('nobelPrizes?limit=10')
    } else if (activeSelector === 'categories') {
      setSelector(`nobelPrize/${category}/${year}`)
    } else if (activeSelector === 'countries') {
      setSelector('laureates?limit=1')
    }


    fetch(`https://api.nobelprize.org/2.1/${selector}`, options)
      .then((response) => response.json())
      .then((json) => setData(json))


    console.log('App ActiveSelector: ', activeSelector, 'Selector: ', selector)
    console.log('App data #1:', data)
  }, [activeSelector, selector, year, category])


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