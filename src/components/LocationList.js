import React from 'react';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async fetchLocations(search) {
    const locationUrl = `https://api.songkick.com/api/3.0/search/locations.json?query=${search}&apikey=71oba8m5CPNDhwfE
`;
    const response = await fetch(locationUrl);
      const data = await response.json();
          if (data.resultsPage.totalEntries > 0)
    this.setState({
      locations: data.resultsPage.results.location,
    });
      else 
              this.setState({
      locations: [],
    });
  }

  handleInputChange(event) {
    this.fetchLocations(event.target.value);
  }

  render() {
    return (
      <div>
        <form className="search-bar">
          <input
            placeholder="Enter your City/Metro Area"
            type="text"
            name="city"
            required
            onChange={this.handleInputChange}
          />
          <button className="search-button" type="submit">
            Go!
          </button>
        </form>
        {this.state.locations.map((value, index) => (
          <div key={index}>
            <ul>
              <li>City: {value.city.displayName}</li>
              <li>Country: {value.city.country.displayName}</li>
              <li>
                <a href={value.metroArea.uri} target="_blank" rel="noopener noreferrer">
                  Click here to see upcoming events
                </a>
              </li>
            </ul>
          </div>
        ))}
        {this.state.locations.length === 0 && <div>Sorry. No upcoming events in this City/Metro Area.</div>}
      </div>
    );
  }
}

export default LocationList;