import React from 'react'
import './Contentcard.css'

const ContentCard = props => {
    return (
        <div className="Contentcard" {props.media}>
            <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" alt="Black Panther" />
            <h2>TItle</h2>
        </div>
    )
}

export default Contentcard
