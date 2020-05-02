// eslint-disable-next-line
import { Fragment } from 'react';
// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// eslint-disable-next-line 
import AppStyles from './App.css';
// eslint-disable-next-line 
import ArtistList from './components/ArtistList';
// eslint-disable-next-line 
import LocationList from './components/LocationList';
import Navbar from './components/Navbar/Navbar';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
// eslint-disable-next-line
import Background from './Background.js';
// eslint-disable-next-line

const ArtistSearch = () => {
return (            <form className='search-bar'>
                    <input placeholder='Search By Artist' type='text' required />
                    <button className='search-button' type='submit'>Go!</button>    
                    </form>
)                 
}

const LocationSearch = () => {
return (            <form className='search-bar'>
                    <input placeholder='Search By City' type='text' required />
                    <button className='search-button' type='submit'>Go!</button>    
                    </form>
)                 
}

class App extends React.Component {
//adding a function so that the hamburger menu can be accessible
  //initializing the state and setting it to false
    state ={
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
  
  async componentDidMount() {
    // eslint-disable-next-line 
    const artistUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.REACT_APP_SONGKICK_API_KEY}&query=slander
`;
     
    // eslint-disable-next-line
    const response = await fetch(artistUrl);
    // eslint-disable-next-line
    const data = await response.json();
    console.log(artistUrl)
    console.log(response)
    console.log(data)
    console.log(data.resultsPage.results.artist)
    
  }
  

  render() {
    // Input an if else statement so I have the option of whether or not the hamburger menu and background is visible to the user
    let background;
    if (this.state.hamburgerOpen) {
    
      //passing the click prop to my Background component; passing a reference to this function
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
            
              <ul>
                <li><NavLink to="/" exact activeStyle={
                  { color: 'bisque'}
                }>Home</NavLink></li>

                <li><NavLink to="/about" exact activeStyle={
                  { color: 'bisque'}
                }>About</NavLink></li>

                <li><NavLink to="/ArtistSearch" exact activeStyle={
                  { color: 'bisque'}
                }>Search by Artist ♪</NavLink></li>

                <li><NavLink to="/LocationSearch" exact activeStyle={
                  { color: 'bisque'}
                }>Search by City ♪</NavLink></li>
              </ul>
              

              <Route path="/" exact strict render={
                () => {
                return (<h1>This is the Homepage ♬</h1>)
              }
              } />        
              
              <Route path="/about" exact strict render={
                () => {
                return (<h1>This is the About Page</h1>)
              }
              } />
          
       <Route path="/ArtistSearch" exact strict component={ArtistSearch} /> 
       <Route path="/LocationSearch" exact strict component={LocationSearch} />   
              
  </div>    
  </Router>
          




      </main>
      </div>
    );
  }        
         
  }






export default App;
