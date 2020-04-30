import React from 'react';

export default class LocationList extends React.Component {


async componentDidMount() {
// eslint-disable-next-line 
const locationUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=Los_Angeles&apikey=${process.env.REACT_APP_SONGKICK_API_KEY}
`;  
    
// eslint-disable-next-line
const response = await fetch(locationUrl);
// eslint-disable-next-line
const data = await response.json();
    console.log(locationUrl)
    console.log(response)
    console.log(data.resultsPage.results.location)
    
}
 
render() {
    return (
        <form className='search-bar'>
        <input placeholder='Search By City' type='text' required />
        <button className='search-button' type='submit'>Go!</button>    
        </form>           
  )  
}

}
