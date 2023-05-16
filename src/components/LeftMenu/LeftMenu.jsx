import React from "react";
import './LeftMenu.css'

const LeftMenu = ({ children }) => {
    const tagsArray = ['chem', 'bvieu', 'opjhb', 'asdhas', 'sinsna']

    return (
        <section className="  leftMenu-wrapper">
            <div className=" innerWidth selector-container flexColCenter">
                {children}
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