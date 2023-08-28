import React from 'react'
import './banner.css'
function Banner() {
   function truncate(string , n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
   }
  return (
    <header className='banner' style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    }}  >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>

        </div>

        <div className="banner__description">
           {truncate("This is my Test description", 150)}
        </div>
      </div>
     <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner
