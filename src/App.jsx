import React, { useEffect, useState } from 'react'
import './components/LeftMenu/LeftMenu.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('')
  const [category, setCategory] = useState('')
  const [year, setYear] = useState('')
  const [data, setData] = useState([])
  const [activeSelector, setActiveSelector] = useState('')

  useEffect(() => {
    if (activeSelector === 'laureates') {
      setSelector('laureates?limit=10')
    } else if (activeSelector === 'categories') {
      setSelector(`nobelPrize/${category}/${year}`)
    } else if (activeSelector === 'countries') {
      setSelector('laureates?limit=1')
    }
  }, [activeSelector])

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://api.nobelprize.org/2.1/${selector}`, options)
      .then((response) => response.json())
      .then((json) => setData(json));

  }, [selector, category])
  console.log(activeSelector)
  console.log('App data:', data)



  return (
    <div className='App paddings'>
      <div className="window-container innerWidth padding flexStart ">
        <LeftMenu setCategoryProperty={setCategory} handleSelector={setActiveSelector} >

        </LeftMenu>
        <RightSection apiData={data} activeSelector={activeSelector}>{/*data point */}

        </RightSection>
      </div>
    </div>
  )
}

export default App