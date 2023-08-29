import React from 'react';
import Homescreen from './Pages/Homescreen';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
function App() {
  const user = null;
  return (
    <div className="App">
       <Routes>
        {!user?( <Route path="/" element={<LoginScreen />} />):(
        <>
          <Route path="/" element={<Homescreen/>} />
        <Route path="*" element={<h1 style={{'color':'white'}}>404 Not Found</h1>} />
        </>
      
        )}
        </Routes>
    </div>
  );
}

export default App;
