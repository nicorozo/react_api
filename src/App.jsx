import React, { useEffect, useState } from 'react'
import './components/LeftMenu/LeftMenu.jsx'
import LeftMenu from './components/LeftMenu/LeftMenu.jsx'
import RightSection from './components/RightSection/RightSection.jsx'
import './App.css'


function App() {
  const [selector, setSelector] = useState('posts')
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${selector}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [])
  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    fetch('https://api.nobelprize.org/2.1/laureates', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  })
  console.log(selector)
  return (
    <div className='App paddings'>
      <div className="window-container innerWidth padding flexStart ">
        <LeftMenu>
          <button className="selector-button" onClick={() => setSelector('posts')}>Posts</button>
          <button className="selector-button" onClick={() => setSelector('todos')}>Todos</button>
          <button className="selector-button" onClick={() => setSelector('photos')}>Photos</button>
        </LeftMenu>
        <RightSection data={data}>

        </RightSection>
      </div>
    </div>
  )
}

export default App