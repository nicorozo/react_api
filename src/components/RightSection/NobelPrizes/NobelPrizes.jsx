import React from 'react'
import '../RightSection.css'

const NobelPrizes = ({ apiData }) => {
    console.log(apiData)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData.nobelPrizes?.map((data, index) =>

                <div className="flexColCenter result" key={data.category.en + index}>
                    <span className="name">{data.category.en}</span>
                    <span className="year">{data.awardYear}</span>{/* change item.connection */}
                    <div className=" laureate-category">
                        <span>{data.prizeAmount}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NobelPrizes