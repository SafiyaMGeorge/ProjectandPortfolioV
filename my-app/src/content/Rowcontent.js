import React, {useState, useEffect} from 'react'
import './Rowcontent.css'
import ContentCard from './Contentcard'
   //These are the titles that are requested from the API
   

//The row title is coming from the content component
const Rowcontent =({Rowtitle, movie1, movie2, movie3, movie4, movie5, movie6}) => {
    const[film1, setMovie1] = useState([]);
    const[film2, setMovie2] = useState([]);
    const[film3, setMovie3] = useState([]);
    const[film4, setMovie4] = useState([]);
    const[film5, setMovie5] = useState([]);
    const[film6, setMovie6] = useState([]);
    const [poster1, setPoster1] = useState([]);
    const [poster2, setPoster2] = useState([]);
    const [poster3, setPoster3] = useState([]);
    const [poster4, setPoster4] = useState([]);
    const [poster5, setPoster5] = useState([]);
    const [poster6, setPoster6] = useState([]);

    useEffect(() =>{
  
    fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie1+"&page=1&r=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
        }
    })
    .then(res => res.json())
    .then(res => res.Search.map(data =>{
        return setMovie1(data.Title), setPoster1(data.Poster)
    }))
    .catch(err => {
        console.error(err);
    });
    })
    useEffect(() =>{
  
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie2+"&page=1&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(res => res.Search.map(data =>{
            return setMovie2(data.Title), setPoster2(data.Poster)
        }))
        .catch(err => {
            console.error(err);
        });
        })
    useEffect(() =>{
  
            fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie3+"&page=1&r=json", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
                    "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
                }
            })
            .then(res => res.json())
            .then(res => res.Search.map(data =>{
                return setMovie3(data.Title), setPoster3(data.Poster)
            }))
            .catch(err => {
                console.error(err);
            });
            })
    useEffect(() =>{

        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie4+"&page=1&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(res => res.Search.map(data =>{
            return setMovie4(data.Title), setPoster4(data.Poster)
        }))
        .catch(err => {
            console.error(err);
        });
   })
    useEffect(() =>{
  
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie5+"&page=1&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(res => res.Search.map(data =>{
            return setMovie5(data.Title), setPoster5(data.Poster)
        }))
        .catch(err => {
            console.error(err);
        });
    })
    useEffect(() =>{
  
        fetch("https://movie-database-imdb-alternative.p.rapidapi.com/?s="+movie6+"&page=1&r=json", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "8972c48833msh0476b30d983b365p101eccjsn5731aba096ef",
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(res => res.Search.map(data =>{
            return setMovie6(data.Title), setPoster6(data.Poster)
        }))
        .catch(err => {
            console.error(err);
        });
    })
    return (
        <div className="Rowcontent">
            <h2>{Rowtitle}</h2>
            <ContentCard Title1= {film1} Poster1 ={poster1} 
            Title2={film2}  Poster2 ={poster2}
            Title3={film3}  Poster3 ={poster3}
            Title4={film4}  Poster4 ={poster4}
            Title5={film5}  Poster5 ={poster5}
            Title6={film6}  Poster6 ={poster6}
            />
        </div>
    )
}

export default Rowcontent
