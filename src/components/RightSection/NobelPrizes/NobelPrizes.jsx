import React from 'react'
import './NobelPrizes.css'

const NobelPrizes = ({ apiData }) => {
    console.log(apiData)
    const categoryColor = (data) => {
        if (data.nobelPrizes[0].category.en === 'Economic Sciences') {
            return '#F3B562'
        } else if (data.nobelPrizes[0].category.en === 'Physics') {
            return '#8CBEB2'
        } else if (data.nobelPrizes[0].category.en === 'Chemistry') {
            return '#06BB90'
        } else if (data.nobelPrizes[0].category.en === 'Literature') {
            return '#F06060'
        } else if (data.nobelPrizes[0].category.en === 'Peace') {
            return '#5C4B51'
        } else if (data.nobelPrizes[0].category.en === 'Physiology or Medicine') {
            return '#5161B5'
        } else return console.log('returning')
    }
    return (
        <div className=" innerWidth flexStart results-container">
            {apiData.laureates?.map((data) =>
                <div className="px-8 flexColCenter card" key={data.id}>
                    <div style={{ backgroundColor: categoryColor(data) }}
                        className="innerWidth flexCenter category-div">

                    </div>

                    <div className="flexStart innerWidth category-container">
                        <div className="circle-container">
                            <div className="circle" style={{ backgroundColor: categoryColor(data) }}>
                                <span>{data.nobelPrizes[0]?.category.en}</span>
                            </div>
                        </div>
                        <div className="flexColCenter category-text">

                            <span>{data.nobelPrizes[0]?.awardYear}</span>
                        </div>
                    </div>
                    <div className="flexColStart innerWidth info-text">
                        <span className="name">{data.knownName?.en}</span>
                        <span className="year">{data.birth?.place?.country.en}</span>
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