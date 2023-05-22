import React from 'react'
import './RightSection.css'

const RightSection = ({ apiData }) => {
  /* `${item.wikidata.url}#/media/File:${item.wikipedia.slug}.jpg` */
  console.log('RightComponent:', apiData)
  return (
    <section className="rightSection-wrapper flexColCenter innerWidth">
      <div className=" innerWidth title-container">
        <h2 className="primaryText title">Nobel Prize API</h2>
      </div>
      <div className="paddings innerWidth flexStart results-container">

        {apiData.laureates?.map((data) =>

          <div className="flexColCenter result" key={data.id}>
            <span className="name">{data.fullName.en}</span>
            <span className="year">{data.nobelPrizes[0].awardYear}</span>{/* change item.connection */}
            <div className=" laureate-category">
              <span>{data.nobelPrizes[0].category.en}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default RightSection