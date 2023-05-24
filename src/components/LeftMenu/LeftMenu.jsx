import React from "react";
import './LeftMenu.css'

const LeftMenu = ({ setCategoryProperty, handleSelector }) => {

    const novelPrizeCategories = [
        { name: "Physics", value: "phy" },
        { name: "Chemistry", value: "che" },
        { name: "Medicine", value: "med" },
        { name: "Literature", value: "lit" },
        { name: "Peace", value: "pea" },
        { name: "Economic Sciences", value: "eco" }
    ]

    return (
        <section className="  leftMenu-wrapper">
            <div className=" innerWidth selector-container flexColCenter">

                <button className="selector-button" onClick={() => handleSelector('nobelPrizes')}>Nobel Prizes</button>
                <button className="selector-button" onClick={() => handleSelector('categories')}>Categories</button>
                <button className="selector-button" onClick={() => handleSelector('countries')}>Countries</button>

            </div>
            <div className="tags-wrapper">
                <div className="innerWidth paddings flexCenter tags-container">
                    {novelPrizeCategories.map((item) =>
                        <button className="tags" onClick={() => setCategoryProperty(item.value)} key={item.value}>{item.name}</button>
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