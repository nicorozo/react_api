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

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://api.nobelprize.org/2.1/${selector}`, options)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [selector])
  console.log(data)


  return (
    <div className='App paddings'>
      <div className="window-container innerWidth padding flexStart ">
        <LeftMenu>
          <button className="selector-button" onClick={() => setSelector('laureates')}>Laureates</button>
          <button className="selector-button" onClick={() => setSelector(`nobelPrize/${category}/${year}`)}>Category</button>
          <button className="selector-button" onClick={() => setSelector('nobelPrizes')}>Countries</button>
        </LeftMenu>
        <RightSection data={data.laureates}>

        </RightSection>
      </div>
    </div>
  )
}

export default App