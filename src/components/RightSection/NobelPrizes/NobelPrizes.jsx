import React from 'react'
import './NobelPrizes.css'
import '../RightSection.css'

const NobelPrizes = ({ apiData }) => {
    console.log(apiData)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData.laureates?.map((data) =>

                <div className="flexColCenter card" key={data.id}>
                    <span className="name">{data.knownName.en}</span>
                    <span className="year">{data.birth.date}</span>
                    <div className=" laureate-category">
                        <span>{data.nobelPrizes[0].awardYear}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NobelPrizes