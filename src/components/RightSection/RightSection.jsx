import React from 'react'
import './RightSection.css'

const RightSection = ({ data }) => {
  /* `${item.wikidata.url}#/media/File:${item.wikipedia.slug}.jpg` */
  console.log(data)
  return (
    <section className="rightSection-wrapper flexColCenter innerWidth">
      <div className=" innerWidth title-container">
        <h2 className="primaryText title">Nobel Prize API</h2>
      </div>
      <div className="paddings innerWidth flexStart results-container">
        {data?.slice(0, 8).map((item, index) =>
          <div className="flexColCenter result" key={index}>
            <span className="name">{item.fullName.en}</span>
            <span className="year">{item.nobelPrizes[0].awardYear}</span>
            <div className=" laureate-category">
              <span>{item.nobelPrizes[0].category.en}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RightSection