import React from 'react'
import './Categories.css'

const Categories = ({ apiData }) => {
    console.log('Categories:', apiData.nobelPrizes)
    return (
        <div className="results-container">
            {apiData.nobelPrizes?.map((data, index) =>

                <div className="card" key={index}>
                    <div className=" cat-date-container">
                        <span className="">{data.category.en}</span>
                        <span className="">{data.dateAwarded}</span>
                    </div>
                    <div className="prize-container">
                        <span className='amount-text'>Prize amount</span>
                        <span className="amount-number"> {'$' + data.prizeAmount}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Categories