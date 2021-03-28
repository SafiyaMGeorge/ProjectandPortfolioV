import React from 'react'
import './Content.css'
import './Rowcontent'
import Rowcontent from './Rowcontent'
   
 function Content() {
    return (
        <div className="Content">
            <Rowcontent Rowtitle='Featured' 
            className="row" 
            movie1="raya the last dragon"
            movie2="The Croods: A New Age"
            movie3="To All the Boys: Always and Forever"
            movie4="Wonder Woman 1984"
            movie5="Hunger Games"
            movie6="Antebellum"
             />
            <Rowcontent Rowtitle='Movies' 
            className="row" 
            movie1="21 Bridges"
            movie2="Godzilla"
            movie3="Assassin's Creed"
            movie4="Wonder Woman 1984"
            movie5="The darkest minds"
            movie6="Mortal Engines"
            />
            <Rowcontent Rowtitle='Shows' 
            className="row" 
            movie1="Scandal"
            movie2="Reign"
            movie3="Law&Order"
            movie4="Antebellum"
            movie5="Hunger Games"
            movie6="Tom and Jerry"
            />
        </div>
    )
}

export default Content
