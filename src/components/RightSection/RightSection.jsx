import React from 'react'
import NobelPrizes from './NobelPrizes/NobelPrizes'
import Categories from './Categories/Categories'
import './RightSection.css'


const Display = ({ activeSelector, apiData }) => {
  if (activeSelector === 'nobelPrizes') {
    return <NobelPrizes apiData={apiData} />
  } else if (activeSelector === 'categories') {
    return <Categories apiData={apiData} />
  }
  else return null
}

const RightSection = ({ apiData, activeSelector }) => {

  return (
    <section className="paddings flexColCenter innerWidth rightSection-wrapper">
      <div className=" paddings innerWidth flexCenter title-container">
        <h2 className="primaryText title">Nobel Prize API</h2>
      </div>
      <Display activeSelector={activeSelector} apiData={apiData} />
    </section>
  )
}

export default RightSection