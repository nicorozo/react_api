import React from 'react'
import './RightSection.css'

const RightSection = ({ data }) => {

  return (
    <section className="rightSection-wrapper flexColCenter innerWidth">
      <div className=" innerWidth title-container">
        <h2 className="primaryText title">Nobel Prize API</h2>
      </div>
      <div className="paddings innerWidth flexStart results-container">
        {data.slice(0, 6).map((item, index) =>
          <div className="flexColCenter result" key={index}>
            <span className="name">{item.title}</span>
            {/* <span className='year'>{item.born}</span> */}
            {/* <span className="discovery">{item.discovery}</span> */}
          </div>
        )}
      </div>
    </section>
  )
}

export default RightSection