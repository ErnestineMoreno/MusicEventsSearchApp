import React from 'react';

export default class LocationList extends React.Component {


async componentDidMount() {
// eslint-disable-next-line 
const locationUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.REACT_APP_SONGKICK_API_KEY}&query=slander
`;  
    
// eslint-disable-next-line
const response = await fetch(locationUrl);
// eslint-disable-next-line
const data = await response.json();
    console.log(locationUrl)
    console.log(response)
    console.log(data)
    console.log(data.resultsPage.results.artist)
}
 
render() {
    return (
        <form className='form-horizontal'>
        <input placeholder='Search By City' type='text' name='searchString' required />
        <button type='submit'>Go!</button>    
        </form>           
  )  
}

}
