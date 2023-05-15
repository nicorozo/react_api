import React from 'react'
import './RightSection.css'

const RightSection = () => {
  const testArray = [{
    name: 'somehit',
    born: '2512',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }, {
    name: 'iuyiutg',
    born: '5456',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }, {
    name: 'sdbfj',
    born: '7632',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }, {
    name: 'sdbfj',
    born: '7632',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }, {
    name: 'sdbfj',
    born: '7632',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }, {
    name: 'sdbfj',
    born: '7632',
    discovery: 'lorespmasob aposbdjlas jrbutiugi aposdmaksldb '
  }
  ]
  return (
    <section className="rightSection-wrapper flexColCenter innerWidth">
      <div className=" innerWidth title-container">
        <h2 className="primaryText title">Nobel Prize API</h2>
      </div>
      <div className="paddings innerWidth flexStart results-container">
        {testArray.map((item, index) =>
          <div className="flexColCenter result" key={index}>
            <span className="name">{item.name}</span>
            <span className='year'>{item.born}</span>
            {/* <span className="discovery">{item.discovery}</span> */}
          </div>
        )}
      </div>
    </section>
  )
}

export default RightSection