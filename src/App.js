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
//adding a function so that the hamburger menu can be accessible
  //initializing the state and setting it to false
    state = {
      hamburgerOpen: false
    };
  
  hamburgerToggleClickHandler = () => {
      //passing in a function to set state
    //in set state passing in the previous state as an argument
    this.setState((prevState, ) => {
        //returning an object so that it updates the state to the opposite of previous state. if this is true it will be saved as false & vice versa. 

      return {hamburgerOpen: !prevState.hamburgerOpen};
      });
   };

  //function to be able to always close the hamburger menu once opened. Then passing this to my Background component
  backgroundClickHandler = () => {
    this.setState({hamburgerOpen: false});
  };
  
  
  render() {
    // Input an if else statement so I have the option of whether or not the hamburger menu and background is visible to the user
    let background;

    if (this.state.hamburgerOpen) {
    
      //passing the click prop to my Background component; passing a reference to this function
      background = <Background click={this.backgroundClickHandler}/>;
    }
     return (
    <div style={{height: '100%'}}>
      {/*
      <ArtistList />
         <LocationList /> */}
         {/* Passing my hamburgerToggleClickHandler to the Navbar since it holds the button that triggers it */}
         {/* passing a prop to my Navbar */}
         <Navbar hamburgerClickHandler={this.hamburgerToggleClickHandler}/>
         <HamburgerMenu show={this.state.hamburgerOpen} />
         {background}
         <main style={{marginTop:'64px'}}>
           <p>Testing filler content. Remove text, Tina ♬</p>
        
         </main>
         
         
    </div>
 ); 

  }


}



export default App;
