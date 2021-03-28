import React from 'react'
import './Search.css'
import { FaSearch } from 'react-icons/fa';


function Search() {
    return (
        <div className='Search'>
            <button id="btnSearch" onClick="results()">
                <FaSearch className="icon"/>
                </button>
                <input type="text" id="uInput" value=" "/>
        </div>
    )
}
let query = "uInput.value";
const btn =document.querySelector('button');
if(btn){
    btn.addEventListener('click', event => {
        event.preventDefault();
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+query+"&page=1&r=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(res => console.log(res.Search.map(data =>{
        return data.Title
    })))
    .catch(err => {
        console.error(err);
    });
    });
}

export default Search
