import React from 'react'
import { SiCircle } from "react-icons/si";
import { BsGithub } from "react-icons/bs"
import './Navbar.css'



const Navbar = () => {

    return (
        <div className="flexCenter navbar">
            <div className='innerwidth flexStart'>
                <SiCircle className='nav-logo' />
                <h2 className="innerWidth nav-logo">Nobel Prize API </h2>
            </div>
            <a href="https://github.com/nicorozo">
                <div className='innerwidth flexStart'>
                    <BsGithub className='nav-logo' />
                    <h2 className="innerWidth nav-logo">Nico Rozo </h2>
                </div>
            </a>
        </div>
    )
}

export default Navbar