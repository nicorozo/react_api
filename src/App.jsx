import React, { useEffect, useState } from 'react'
import './components/LeftMenu/LeftMenu.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('/laureates')
  const [data, setData] = useState([])

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch(`https://api.nobelprize.org/2.1${selector}`, options)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [selector])
  console.log(data.laureates)
  return (
    <div className='App paddings'>
      <div className="window-container innerWidth padding flexStart ">
        <LeftMenu>
          <button className="selector-button" onClick={() => setSelector('/laureates')}>Posts</button>
          <button className="selector-button" onClick={() => setSelector('/nobelPrizes')}>Todos</button>
          <button className="selector-button" onClick={() => setSelector('/nobelPrizes')}>Photos</button>
        </LeftMenu>
        <RightSection data={data.laureates}>

        </RightSection>
      </div>
    </div>
  )
}

export default App