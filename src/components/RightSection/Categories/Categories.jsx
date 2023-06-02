import React from 'react'
import './Categories.css'

const Categories = ({ apiData }) => {
    console.log('Categories:', apiData.nobelPrizes)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData.nobelPrizes?.map((data, index) =>

                <div className="flexColCenter categories-card" key={index}>
                    <span className="name">{data.dateAwarded}</span>
                    <span className="name">{data.category.en}</span>
                    <span className="name">{'$' + data.prizeAmount}</span>
                </div>
            )}
        </div>
    )
}

export default Categories