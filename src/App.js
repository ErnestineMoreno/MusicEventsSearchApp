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
                  { color: 'bisque'}
                }>Home</NavLink></li>

                <li><NavLink to="/ArtistList" exact activeStyle={
                  { color: 'bisque'}
                }>Search by Artist</NavLink></li>

                <li><NavLink to="/LocationList" exact activeStyle={
                  { color: 'bisque'}
                }>Search by City</NavLink></li>
              </ul>
              

              <Route path="/" exact strict render={
                () => {
                  return (<div>
                    <br></br>
                    <h1>Bliss</h1>
                    <h4>Search for music events while you're on-the-go.</h4>
                  </div>)
                  
                      }
                      } />        
                      
              <Route path="/contact" exact strict render={
                () => {
                  return ( 
                    
<p>
                <br></br>
                <ul>
                     <h2>Creator: Ernestine "Tina" Moreno</h2>
                        <h2>Email: ErnestineMoreno4@gmail.com </h2>
                  <h2><a href="https://www.linkedin.com/in/etinamoreno/">➳ Linkedin</a></h2>
                  <h2><a href="https://github.com/ErnestineMoreno">➳ GitHub</a></h2>
                                   <br></br> <div>
                
                  </div>
                  </ul>
</p>                                    
                                  )
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
