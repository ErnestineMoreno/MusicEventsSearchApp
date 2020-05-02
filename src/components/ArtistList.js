import React from 'react';

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async fetchArtists(search) {
    const artistUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=71oba8m5CPNDhwfE&query=${search}`;
    const response = await fetch(artistUrl);
    const data = await response.json();
    if (data.resultsPage.totalEntries > 0)
    this.setState({
      artists: data.resultsPage.results.artist,
    });
    else 
      this.setState({
      artists: [],
    });
  }

  handleInputChange(event) {
    this.fetchArtists(event.target.value);
  }

  render() {
    return (
      <div>
        <form className="search-bar">
          <input
            placeholder="Enter Artist(s) or Band Name"
            type="text"
            name="artist"
            required
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            Go!
          </button>
        </form>
        {this.state.artists.map((value, index) => (
          <div key={index}>
            <ul>
              <li>Artist Name: {value.displayName}</li>
              <li>On Tour Until: {value.onTourUntil}</li>
              <li>
                <a href={value.uri} target="_blank" rel="noopener noreferrer">
                  Click here to see upcoming events
                </a>
              </li>
            </ul>
          </div>
        ))}
        {this.state.artists.length === 0 && <div>Sorry. No upcoming events for this Artist.</div>}
      </div>
    );
  }
}

export default ArtistList;