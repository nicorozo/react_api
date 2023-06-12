import React from 'react'
import './Categories.css'

const Categories = ({ apiData }) => {
    console.log('Categories:', apiData.nobelPrizes)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData.nobelPrizes?.map((data, index) =>

                <div className="p-8 flexColStart categories-card" key={index}>
                    <div className=" innerWidth flexStart cat-date-container">
                        <span className="">{data.category.en}</span>
                        <span className="">{data.dateAwarded}</span>
                    </div>
                    <div className="innerWidth flexColCenter prize-container">
                        <span className='amount-text'>Prize amount</span>
                        <span className="py-2 amount-number"> {'$' + data.prizeAmount}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Categories