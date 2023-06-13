import React, { useState } from "react";
import './LeftMenu.css'

const LeftMenu = ({ handleYearsFrom, handleYearsTo, setCategoryProperty, handleSelector, handleOffset }) => {
    const [clickedSelector, setClickedSelector] = useState('')
    const [offset, setOffset] = useState(0)

    const previousButton = () => {
        if (offset >= 9) {
            setOffset((n) => n - 9)
            handleOffset(offset)
        }
    }
    const nextButton = () => {
        setOffset((n) => n + 9)
        handleOffset(offset)
    }


    const novelPrizeCategories = [
        { name: "Physics", value: "phy" },
        { name: "Chemistry", value: "che" },
        { name: "Medicine", value: "med" },
        { name: "Literature", value: "lit" },
        { name: "Peace", value: "pea" },
        { name: "Economic Sciences", value: "eco" },
        { name: "All", value: "" }
    ]
    const selectorColor = () => {

        setClickedSelector(event.target.id)
        return handleSelector(event.target.id)
    }

    return (
        <section className="flexColStart leftMenu-wrapper">

            {/* SELECTORS */}

            <div className=" innerWidth  flexColCenter selector-container">
                <button id="nobelPrizes"
                    className=" selector-button"
                    style={{ borderColor: clickedSelector === 'nobelPrizes' ? 'orangered' : '' }}
                    onClick={() => selectorColor()}>Nobel Prizes</button>
                <button id="categories"
                    className=" selector-button"
                    style={{ borderColor: clickedSelector === 'categories' ? 'orangered' : '' }}
                    onClick={() => selectorColor()}>Categories</button>
            </div>
            <div className="flexColStart div-test">

                {/* BUTTONS */}
                <div className=" paddings tags-wrapper">
                    <div className="innerWidth  flexStart tags-container">
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
                {/* Arrows */}
                <div className="paddings flexCenter arrows-container">
                    <button onClick={() => previousButton()}
                        style={{
                            backgroundColor: offset === 0 ? "gray" : '',
                        }}
                        className="button tags">Previous</button>
                    <button onClick={() => nextButton()}
                        className="button tags">Next</button>
                </div>
            </div>
        </section>
    )
}

export default LeftMenu