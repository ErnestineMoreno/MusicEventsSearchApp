import React from 'react';
// eslint-disable-next-line
import { Route, Link } from "react-router-dom";
import ArtistList from './components/ArtistList';
// eslint-disable-next-line
import LocationList from './components/LocationList';


function App() {



  return (
    <div>
      <h1>Bliss</h1>
      <ArtistList />
      <LocationList />
    </div>
 );

}



export default App;
