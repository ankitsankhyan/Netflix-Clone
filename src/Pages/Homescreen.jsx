import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import './Homescreen.css'
import requests from '../api/request'
import Row from '../components/Row'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../Slices/userSlice'
function Homescreen() {
 
  let user = useSelector(selectUser);
  const navigate = useNavigate();
 console.log(user,'is user');
  useEffect(() => {
    console.log(user,'is user');
    if (!user) {
      navigate('/');
    }
  }, [user]);
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
