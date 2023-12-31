import React from 'react'
import { useState, useEffect } from 'react'
import './banner.css'
import axios from '../api/axios'
import requests from '../api/request';
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
       const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request.data.results)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
    }

    fetchData();
    return;
  }, [])

  console.log(movie)
   function truncate(string , n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
   }
  return (
    <header className='banner' style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }}  >


      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title|| movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>

        </div>

        <div className="banner__description">
           {truncate(movie?.overview, 150)}
        </div>
      </div>
     <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner
