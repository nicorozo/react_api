import React from "react";
import './LeftMenu.css'

const LeftMenu = ({ setCategoryProperty, handleSelector }) => {

    const novelPrizeCategories = [
        { name: "Physics", value: "phy" },
        { name: "Chemistry", value: "che" },
        { name: "Medicine", value: "med" },
        { name: "Literature", value: "lit" },
        { name: "Peace", value: "pea" },
        { name: "Economic Sciences", value: "eco" },
        { name: "All", value: "" }
    ]

    return (
        <section className="  leftMenu-wrapper">
            <div className=" innerWidth selector-container flexColCenter">

                <button className="selector-button" onClick={() => handleSelector('nobelPrizes')}>Nobel Prizes</button>
                <button className="selector-button" onClick={() => handleSelector('categories')}>Categories</button>

            </div>
            <div className="tags-wrapper">
                <div className="innerWidth paddings flexCenter tags-container">
                    {novelPrizeCategories.map((item) =>
                        <button className="tags" onClick={() => setCategoryProperty('&nobelPrizeCategory=' + item.value)} key={item.value}>{item.name}</button>
                    )}
                </div>
            </div>
            <div className="innerWidth filters-container">
                filters
                <form onSubmit={(e) => {
                    e.preventDefault()
                    alert('hey')
                }} className="filters-container">
                    <label htmlFor="yearFrom">From</label>
                    <input id="yearFrom" type="text" /><br />
                    <label htmlFor="yearTo">To</label>
                    <input id="yearTo" type="text" />
                    <button className="search-button">Search</button>
                </form>
            </div>

        </section>
    )
}

export default LeftMenu