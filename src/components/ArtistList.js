import React, { Fragment } from 'react';

export default class ArtistList extends React.Component {
    state = {
        events: []

    };

async componentDidMount() {
// eslint-disable-next-line 
const artistUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=${process.env.REACT_APP_SONGKICK_API_KEY}&query=slander
`;  
    
// eslint-disable-next-line
const response = await fetch(artistUrl);
// eslint-disable-next-line
const data = await response.json();
    // console.log(artistUrl)
    // console.log(response)
    // console.log(data)
    console.log(data.resultsPage.results.artist)
    this.setState({ events: data.resultsPage.results.artist});
}
 
    render() {

        return (
    <Fragment>
        <form className='search-bar'>
        <input placeholder='Search By Artist Name' type='text' name='searchString' required />
        <button type='submit'>Go!</button>    
        </form>  
     
            <div>
                {this.state.events.map(events => (
                    <div>{events.data}</div>
                ))}
            </div>
            </Fragment>
            
  )  
}

}
