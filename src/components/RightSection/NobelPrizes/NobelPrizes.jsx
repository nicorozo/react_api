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
        <div className=" results-container">
            {apiData.laureates?.map((data) =>
                <a href={`${data.wikipedia?.english}`}>
                    <div className="card" key={data.id}>
                        <div style={{ backgroundColor: categoryColor(data) }}
                            className="flexCenter category-div">
                            <span>{data.nobelPrizes[0]?.category.en == 'Economic Sciences' ? 'Economy' : data.nobelPrizes[0]?.category.en}</span>
                        </div>
                        <div className="flexColCenter category-text">
                            <span>{data.nobelPrizes[0]?.awardYear}</span>
                        </div>
                        <div className="info-text">
                            <span className="name">{data.knownName?.en}</span><br />
                            <span className="year">{data.birth?.place?.country.en}</span>
                        </div>
                    </div>
                </a>
            )}
        </div>
    )
}

export default NobelPrizes