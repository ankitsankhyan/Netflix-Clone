import React from 'react';
import './Row.css';
import axios from './axios';
import { useState, useEffect } from 'react';
function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
           
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
     
    return (
        <div className="row">
            <h2>{title}</h2>
           {movies.map((movie) => (
             <img key={movie.id}  src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
             }`} alt={movie.name}/>
           ))}

        </div>
    )
}

export default Row