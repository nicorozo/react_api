import React from 'react'
import NobelPrizes from './NobelPrizes/NobelPrizes'
import Categories from './Categories/Categories'
import './RightSection.css'

const IntroText = () => {
  return (
    <div className="paddings innerWidth flextStart introduction">
      <h1 className='font-bold text-2xl mb-4'>Nobel Prize API</h1>
      <p>Welcome to the Nobel Prize API, a platform born out of a deep motivation and inspiration to share the remarkable stories of human achievement and progress. The Nobel Prize stands as a symbol of excellence, honoring individuals and organizations that have made extraordinary contributions to society. By creating this API, we aim to provide a seamless gateway for researchers, developers, and enthusiasts to access and explore the wealth of knowledge and inspiration encapsulated within the Nobel Prize.</p>
      <ul className='list-disc paddings'>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Medicine</li>
        <li>Literature</li>
        <li>Peace</li>
        <li>Economic Sciences</li>
      </ul>
      <p></p>
    </div>
  )
}

const Display = ({ activeSelector, apiData }) => {
  if (activeSelector === 'nobelPrizes') {
    return <NobelPrizes apiData={apiData} />
  } else if (activeSelector === 'categories') {
    return <Categories apiData={apiData} />
  }
  return
}

const RightSection = ({ apiData, activeSelector }) => {

  return (
    <section className=" rightSection-wrapper">
      {activeSelector ? <Display activeSelector={activeSelector} apiData={apiData} /> : <IntroText />}
    </section>

  )
}

export default RightSection