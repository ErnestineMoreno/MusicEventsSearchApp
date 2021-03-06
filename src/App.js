// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Route,  NavLink } from "react-router-dom";
// eslint-disable-next-line 
import AppStyles from './App.css';
import ArtistList from './components/ArtistList';
import LocationList from './components/LocationList';
import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
// eslint-disable-next-line
import Background from './Background.js';
// eslint-disable-next-line

//Adding a function so that the hamburger menu is accessible
class App extends React.Component {
//Initializing the state and setting it to false
state = {
      hamburgerOpen: false
    };

//Passing in a function to set state
  hamburgerToggleClickHandler = () => {
//In set state passing in the previous state as an argument
  this.setState((prevState, ) => {
//Returning an object so that it updates the state to the opposite of previous state. If this is true it will be saved as false & vice versa.
  return {hamburgerOpen: !prevState.hamburgerOpen};
      });
   };

//Creating a function to enable the hamburger menu to close, once opened; then passing this to my background component
  backgroundClickHandler = () => {
    this.setState({hamburgerOpen: false});
  };
  
   render() {
//Input an if else statement so I have the option of whether or not the hamburger menu and background is visible to the user
    let background;
    if (this.state.hamburgerOpen) {
    
//Passing the click prop to my Background component; passing a reference to this function
      background = <Background click={this.backgroundClickHandler} />;
    }
    return (
      
      <div style={{ height: '100%' }}>
        {/* Passing my hamburgerToggleClickHandler to the Navbar since it holds the button that triggers it */}
        {/* passing a prop to my Navbar */}
        <Navbar hamburgerClickHandler={this.hamburgerToggleClickHandler} />
        <HamburgerMenu show={this.state.hamburgerOpen} />
        {background}
        <main style={{ marginTop: '64px' }}>


<Router>   
            <div className="App">
            
              <ul className="nav-bar">
                <li><NavLink to="/" exact activeStyle={
                  { color: '#ced4da'}
                }>Home</NavLink></li>

                <li><NavLink to="/ArtistList" exact activeStyle={
                  { color: '#ced4da'}
                }>Search by Artist</NavLink></li>

                <li><NavLink to="/LocationList" exact activeStyle={
                  { color: '#ced4da'}
                }>Search by City</NavLink></li>
              </ul>
              

              <Route path="/" exact strict render={
                () => {
                  return (<div>
<h2><span role="img" aria-label="headphones">
                      🎧</span> <br></br><br></br>
Search for music events on-the-go</h2>
                  </div>)
                      }
                      } />        

       <Route path="/ArtistList" exact strict component={ArtistList} /> 
       <Route path="/LocationList" exact strict component={LocationList} />   
              
  </div>    
  </Router>
      </main>
      </div>
    );
  }        
         
  }






export default App;
