import React from 'react'
import Search from '../search/Search'
import { FaBell } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <section id="headerLeft">
                <h1>ChillSpot</h1>
            </section>
            <section id="headerMiddle">
                <Search />
            </section>
            <section id="headerRight">
                <div className="icons">
                <FaBell/>
                </div>
                <div className="icons">
                <FaUserCircle/>
                </div>
            </section>
        </div>
    )
}

export default Header