// eslint-disable-next-line 
import React, { Component } from 'react';
// eslint-disable-next-line 
import { Route, Link } from "react-router-dom";
// eslint-disable-next-line 
import ArtistList from './components/ArtistList';
// eslint-disable-next-line 
import LocationList from './components/LocationList';
import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
// eslint-disable-next-line
import Background from './Background.js'

class App extends React.Component {


  render() {
     return (
    <div style={{height: '100%'}}>
      {/* <h1>Bliss</h1>
      <ArtistList />
         <LocationList /> */}
         <Navbar />
         <HamburgerMenu />
         <Background />
         <main style={{marginTop:'64px'}}>
           <p>This is the page content!</p>
        
         </main>
         
         
    </div>
 ); 

  }


}



export default App;
