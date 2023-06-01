import React, { useRef, useState } from "react";
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
    /* const selectorColor = (event) => {

        setClickedSelector(event.target.id) 
        console.log(clickedSelector)

        return handleSelector(clickedSelector)
    } IN PROCESS */

    return (
        <section className="  leftMenu-wrapper">

            {/* SELECTORS */}
            <div className=" innerWidth selector-container flexColCenter">
                <button id="nobelPrizes"
                    className=" selector-button"
                    style={{ backgroundColor: '' }}
                    onClick={() => handleSelector(() => event.target.id)}>Nobel Prizes</button>
                <button id="categories"
                    className=" selector-button"
                    onClick={() => handleSelector(() => event.target.id)}>Categories</button>
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
            <div className="innerWidth paddings flexColCenter filters-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    const yearFrom = document.getElementById('yearFrom')
                    const yearTo = document.getElementById('yearTo')
                    handleYearsFrom('&nobelPrizeYear=' + yearFrom.value)
                    handleYearsTo('&yearTo=' + yearTo.value)
                }} className="innerWidth ">
                    <div className="innerWidth flexCenter filterByYears">
                        <span>Filter By Years</span>
                    </div>
                    <div className="  innerWidth flexEnd input-filter-container">
                        <label htmlFor="yearFrom">From</label>
                        <input placeholder="min 1901" maxLength={4} max={2023} min={1990} id="yearFrom" type="text" />
                    </div>
                    <div className="  innerWidth flexEnd input-filter-container">
                        <label htmlFor="yearTo">To</label>
                        <input placeholder="max 2023" maxLength={4} max={2023} min={1990} id="yearTo" type="text" />
                    </div>
                    <button type="submit" className="innerWidth search-button">Search</button>
                </form>
            </div>

        </section>
    )
}

export default LeftMenu