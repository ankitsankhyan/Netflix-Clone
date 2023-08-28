import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import './Homescreen.css'
import requests from '../api/request'
import Row from '../components/Row'
function Homescreen() {
  return (
    <div>
        <Nav />
        <Banner />
      <Row 
      title='NetFlix Originals'
      fetchUrl = {requests.fetchNetflixOriginals} isLargeRow = {true}/>
      <Row 
      title='Trending Now'
      fetchUrl = {requests.fetchTrending}/>
      <Row 
      title='Top Rated'
      fetchUrl = {requests.fetchActionMovies}/>
      <Row 
      title='Comedy Movies'
      fetchUrl = {requests.fetchComedyMovies}/>
      <Row 
      title='Horror Movies'
      fetchUrl = {requests.fetchHorrorMovies}/>
      <Row 
      title='Romance Movies'
      fetchUrl = {requests.fetchRomanceMovies}/>
      <Row 
      title='Documentaries'
      fetchUrl = {requests.fetchDocumentaries}/>
    
    </div>
  )
}

export default Homescreen