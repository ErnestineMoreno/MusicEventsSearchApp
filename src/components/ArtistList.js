import React from 'react';

// Hou comment: As a follow-up challenge, how would you refactor ArtistList to use a functional component + Hooks?
class ArtistList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      search: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Hou comment: nice job using the async await pattern here!
  async fetchArtists(search) {
    const artistUrl = `https://api.songkick.com/api/3.0/search/artists.json?apikey=71oba8m5CPNDhwfE&query=${search}`;
    const response = await fetch(artistUrl);
    const data = await response.json();
    if (data.resultsPage.totalEntries > 0) {
      this.setState({
        artists: data.resultsPage.results.artist,
      });
    } else {
      this.setState({
        artists: [],
      });
    }

    // Hou comment: here's how you can refactor lines 20-28
    // this.setState({
    //   artists: data.resultsPage.totalEntries > 0 ? data.resultsPage.results.artist : []
    // })
  }

  handleInputChange(event) {
    event.preventDefault();
    // Hou comment: instead of using the DOM API to get the value on line 39, a better strategy would be to store the value in state. That way, when the value changes, the UI would update as well, as appropriate
    let value = document.getElementById('artists').value;
    this.fetchArtists(value);
    this.setState({
      search: value,
    });
  }

  render() {
    // Hou comment: you could use destructuring to extract your state into variables, so you don't have to access them repeatedly in this.state
    let { artists, search } = this.state;
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleInputChange}>
          <input
            placeholder="which artist would you like to see live? type here..."
            type="text"
            name="artists"
            id="artists"
            required
            autoComplete="off"
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            <span role="img" aria-label="headphones">
              🎧
            </span>
          </button>
        </form>
        {artists.map((value, index) => (
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
        {search.length > 0 && artists.length === 0 && (
          <div>Sorry! No matches found for this entry</div>
        )}
        {search.length === 0 && <div>Enter Artist, DJ or Band name</div>}
      </div>
    );
  }
}

export default ArtistList;
