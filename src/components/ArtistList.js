import React from 'react';


export default class ArtistList extends React.Component {
  
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
        console.log(data.resultsPage.results.artist)    
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