import React from 'react'
import './NobelPrizes.css'

const NobelPrizes = ({ apiData }) => {
    console.log(apiData)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData.laureates?.map((data) =>

                <div className="paddings flexColCenter card" key={data.id}>
                    <div className="flexStart innerWidth category-container">
                        <div className="circle-container">
                            <div className="circle"></div>
                        </div>
                        <div className="flexColCenter category-text">
                            <span>{data.nobelPrizes[0].category.en}</span>
                            <span>{data.nobelPrizes[0].awardYear}</span>
                        </div>
                    </div>
                    <div className="flexColStart innerWidth info-text">
                        <span className="name">{data.knownName.en}</span>
                        <span className="year">{data.birth.place?.country.en}</span>
                    </div>
                    <div className="info-container">
                        <a href={`${data.wikipedia?.english}`}>
                            <button className="button more-info-btn">More Info</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NobelPrizes