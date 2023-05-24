import React from 'react'
import '../RightSection.css'

const Categories = ({ apiData }) => {
    console.log('Categories:', apiData)
    return (
        <div className="paddings innerWidth flexStart results-container">
            {apiData?.map((data, index) =>

                <div className="flexColCenter result" key={index}>
                    <span className="name">{data.dateAwarded}</span>
                </div>
            )}
        </div>
    )
}

export default Categories