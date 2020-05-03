import React from 'react';

class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      search: "",
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
    event.preventDefault();
    let value = document.getElementById('artists').value;
    this.fetchArtists(value);
    this.setState({
      search: value,
    });
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleInputChange}>
          <input
            placeholder="who would you like to see live? type here..."
            type="text"
            name="artists"
            id="artists"
            required
            autoComplete="off"
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            <span role="img" aria-label="headphones">🎧</span>
            
          </button>
        </form>
        {this.state.artists.map((value, index) => (
          <div key={index}>
            <ul>
              <li>Artist: {value.displayName}</li>
              <li>
                <a href={value.uri} target="_blank" rel="noopener noreferrer">
                  Click to view upcoming events
                </a>
              </li>
            </ul>
          </div>
        ))}
        {(this.state.search.length > 0 && this.state.artists.length === 0) && <div>Sorry! No matches found for this entry</div>}
        {this.state.search.length === 0 && <div>Enter Artist, DJ or Band name</div>}
      </div>
    );
  }
}

export default ArtistList;