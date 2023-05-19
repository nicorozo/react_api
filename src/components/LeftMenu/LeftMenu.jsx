import React from "react";
import './LeftMenu.css'

const LeftMenu = ({ children }) => {
    const novelPrizeCategories = [
        "Physics",
        "Chemistry",
        "Medicine",
        "Literature",
        "Peace",
        "Economic Sciences"
    ]

    return (
        <section className="  leftMenu-wrapper">
            <div className=" innerWidth selector-container flexColCenter">
                {children}
            </div>
            <div className="tags-wrapper">
                <div className="innerWidth paddings flexCenter tags-container">
                    {novelPrizeCategories.map((item, index) =>
                        <div className="tags" key={index}>{item}</div>
                    )}
                </div>
            </div>
            <div className="innerWidth filters-container">
                filters
                <button className="search-button">Search</button>
            </div>

        </section>
    )
}

export default LeftMenu