import React, { useState } from "react";
import './LeftMenu.css'

const LeftMenu = ({ handleYearsFrom, handleYearsTo, setCategoryProperty, handleSelector }) => {
    const [clickedSelector, setClickedSelector] = useState('')

    const novelPrizeCategories = [
        { name: "Physics", value: "phy" },
        { name: "Chemistry", value: "che" },
        { name: "Medicine", value: "med" },
        { name: "Literature", value: "lit" },
        { name: "Peace", value: "pea" },
        { name: "Economic Sciences", value: "eco" },
        { name: "All", value: "" }
    ]

    const selectorColor = (event) => {
        const clicked = event.target.id
        alert(clicked)
    }

    return (
        <section className="  leftMenu-wrapper">

            {/* SELECTORS */}
            <div className=" innerWidth selector-container flexColCenter">
                <button className=" selector-button"
                    style={{ backgroundColor: '' }}
                    onClick={() => handleSelector('nobelPrizes')}>Nobel Prizes</button>
                <button className=" selector-button"
                    onClick={() => handleSelector('categories')}>Categories</button>
            </div>

            {/* BUTTONS */}
            <div className="tags-wrapper">
                <div className="innerWidth paddings flexCenter tags-container">
                    {novelPrizeCategories.map((item) =>
                        <button className="button tags" onClick={() => setCategoryProperty('&nobelPrizeCategory=' + item.value)} key={item.value}>{item.name}</button>
                    )}
                </div>
            </div>

            {/* FILTERS */}
            <div className="innerWidth filters-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const yearFrom = document.getElementById('yearFrom')
                    const yearTo = document.getElementById('yearTo')
                    handleYearsFrom('&nobelPrizeYear=' + yearFrom.value)
                    handleYearsTo('&yearTo=' + yearTo.value)
                }} className="filters-container">

                    <label htmlFor="yearFrom">From</label>
                    <input id="yearFrom" type="text" /><br />
                    <label htmlFor="yearTo">To</label>
                    <input id="yearTo" type="text" />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>

        </section>
    )
}

export default LeftMenu