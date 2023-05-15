import React, { useState } from "react";
import './LeftMenu.css'

const LeftMenu = () => {
    const [selector, setSelector] = useState('')

    const tagsArray = ['chem', 'bvieu', 'opjhb', 'asdhas', 'sinsna']
    console.log(selector)
    return (
        <section className="  leftMenu-wrapper">
            <div className=" innerWidth selector-container flexColCenter">
                <button className="selector-button" onClick={() => setSelector('Prize')}>Prize</button>
                <button className="selector-button" onClick={() => setSelector('Laureate')}>Laureate</button>
                <button className="selector-button" onClick={() => setSelector('Country')}>Country</button>
            </div>
            <div className="tags-wrapper">
                <div className="innerWidth paddings flexCenter tags-container">
                    {tagsArray.map((item, index) =>
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