import React from 'react';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      search: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async fetchLocations(search) {
    const locationUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${search}&apikey=71oba8m5CPNDhwfE`;
    const response = await fetch(locationUrl);
    const data = await response.json();
    // Hou comment: how would you refactor lines 19-27 to use ternary operator?
    if (data.resultsPage.totalEntries > 0) {
      this.setState({
        locations: data.resultsPage.results.location,
      });
    } else {
      this.setState({
        locations: [],
      });
    }
  }

  handleInputChange(event) {
    event.preventDefault();
    // Hou comment: instead of using the DOM API to get the value on line 39, a better strategy would be to store the value in state. That way, when the value changes, the UI would update as well, as appropriate
    const value = document.getElementById('locations').value;
    this.fetchLocations(value);
    this.setState({
      search: value,
    });
  }

  render() {
    // Hou comment: you could use destructuring to extract your state into variables, so you don't have to access them repeatedly in this.state
    let { locations, search } = this.state;

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
            <span role="img" aria-label="headphones">
              🎧
            </span>
          </button>
        </form>
        {locations.map((value, index) => (
          <div key={index}>
            <ul>
              <li>City: {value.city.displayName}</li>
              <li>Country: {value.city.country.displayName}</li>
              <li>
                <a
                  href={value.metroArea.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click to view upcoming events
                </a>
              </li>
            </ul>
          </div>
        ))}
        {search.length > 0 && locations.length === 0 && (
          <div>Sorry! No matches found for this entry</div>
        )}
        {search.length === 0 && <div>Enter City or nearest Metro Area</div>}
      </div>
    );
  }
}

export default LocationList;
