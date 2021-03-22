import React from 'react'
import "./Nav.css"

function Nav() {
    return (
        <div className="Navbar">
            <h2>Genres</h2>
            <nav className="nav">
            <ul>
                <li><h3>Top Rated</h3></li>
                <li><h3>Shows</h3></li>
                <li><h3>Movies</h3></li>
                <li><h3>Drama</h3></li>
                <li><h3>Comedy</h3></li>
                <li><h3>Horror</h3></li>
                <li><h3>Sci-fi</h3></li>
                <li><h3>Anime</h3></li>
                <li><h3>Thriller</h3></li>
                <li><h3>Romance</h3></li>
            </ul>
            </nav>
        </div>
    )
}

export default Nav
