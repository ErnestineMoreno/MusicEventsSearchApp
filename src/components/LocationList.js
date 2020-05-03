import React from 'react';

class LocationList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: [],
      search: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async fetchLocations(search) {
    const locationUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${search}&apikey=71oba8m5CPNDhwfE
`;
    const response = await fetch (locationUrl);
    const data = await response.json();
    if (data.resultsPage.totalEntries > 0)
      this.setState({
        locations: data.resultsPage.results.location,
      });
    else {
      this.setState({
        locations: [],
      });
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    let value = document.getElementById('locations').value;
    this.fetchLocations(value);
    this.setState({
      search: value
    });
  }

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleInputChange}>
          <input
            placeholder="where on earth are you? type here..."
            type="text"
            name="city"
            id="locations"
            autoComplete="off"
            required
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            <span role="img" aria-label="headphones">🎧</span>
          </button>
        </form>
        {this.state.locations.map((value, index) => (
          <div key={index}>
            <ul>
              <li>City: {value.city.displayName}</li>
              <li>Country: {value.city.country.displayName}</li>
              <li>
                <a href={value.metroArea.uri} target="_blank" rel="noopener noreferrer">
                  Click to view upcoming events
                </a>
              </li>
            </ul>
          </div>
        ))}
        {(this.state.search.length > 0 && this.state.locations.length === 0) && <div>Sorry! No matches found for this entry</div>}
        {this.state.search.length === 0 && <div>Enter City or nearest Metro Area</div>}
      </div>
    );
  }
}

export default LocationList;