import React, { Fragment } from 'react';
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import ArtistList from './components/ArtistList';
// eslint-disable-next-line
import LocationList from './components/LocationList';


class App extends React.Component {
  state = {
    visible: true
  };

  render() {
     return (
    <div className='App'>
      <h1>Bliss</h1>
      <ArtistList />
         <LocationList />
         <Fragment />
    </div>
 ); 

  }


}



export default App;
