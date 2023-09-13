import React, { useState } from 'react'
import { SiCircle } from "react-icons/si";
import { BsGithub } from "react-icons/bs"
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import './Navbar.css'



const Navbar = () => {
    const [isMenuBtn, setIsMenuBtn] = useState(true)
    function mobileMenu() {
        //const menuBtn = document.querySelector('.mobile_menu-btn')
        const menuModal = document.querySelector('.leftMenu-wrapper')
        if (isMenuBtn) {
            menuModal.style.left = '0px'
        } else if (!isMenuBtn) {
            menuModal.style.left = '-100%'
        }
        setIsMenuBtn(!isMenuBtn)
    }
    const menuIcon = isMenuBtn ? <FiMenu className='mobile_menu-icon' /> : <IoClose className='mobile_menu-icon' />

    return (
        <div className="navbar">
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
            <div className="mobile_menu">
                <button className="mobile_menu-btn" onClick={mobileMenu}>{menuIcon}</button>
            </div>
        </div>
    )

}

export default Navbar