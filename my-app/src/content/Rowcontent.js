import React from 'react'
import './Rowcontent.css'
import ContentCard from './Contentcard'


function Rowcontent({title}) {
    let movie1="raya the last dragon";
   /* let movie2="The Croods: A New Age"
    let movie3="To All the Boys: Always and Forever"
    let movie4="Wonder Woman 1984"
    let movie5="Monster Hunter"
    let movie6="Antebellum"*/
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie1+"&page=1&r=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
        console.error(err);
    });
    return (
        <div className="Rowcontent">
            <h2>{title}</h2>
            <ContentCard />
        </div>
    )
}

export default Rowcontent
