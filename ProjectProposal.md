## Project Description

My app is called "Bliss". It's a music events app for people who are looking to attend upcoming festivals/concerts. Users can search for upcoming events by artist name or location. In the future, I will add features that will allow users to listen to snippets of the artist's songs and include a mini bio for that particular artist and/or band.


## Wireframes
This is a Rough Draft and has not been finalized.![alt text](https://user-images.githubusercontent.com/60417740/80343021-099c8000-881a-11ea-94e4-63d847786c1b.png "This is a Rough Draft and has not been finalized.")


### MVP User Stories

MVP User Stories

As a user, I want to be able to search for a particular artist or band and see a listing of all upcoming music events (festivals/concerts/shows) playing by location and artist name.

As a user, I would like to filter upcoming event dates as I scroll through the search results.


## API

Songkick API Link:
https://api.songkick.com/api/3.0/search/artists.json?apikey={your_api_key}&query={artist_name}
https://api.songkick.com/api/3.0/search/locations.json?query={search_query}&apikey={your_api_key}


 API Artist Object Response:
 ```{
    id: 253846,
    displayName: "Radiohead",
    uri: "http://www.songkick.com/artists/253846-radiohead?utm_source=45852&utm_medium=partner",
    identifier: [
      {
        href: "http://api.songkick.com/api/3.0/artists/mbid:a74b1b7f-71a5-4011-9441-d0b5e4122711.json",
        mbid: "a74b1b7f-71a5-4011-9441-d0b5e4122711"
      }
    ],
    onTourUntil: "2018-04-25"
  }
  ```

  API Location Object Response:
  ```{
    "city":"San Francisco, CA, US",
    "lat":37.7842398,
    "lng":-122.4332937
  }
  ```
API references/documentation:
All the info you need should be here: http://www.songkick.com/developer, let me know if you need any other assistance.

Please note that access to our API is covered by our standard terms of use which include:

- Songkick is the exclusive live music data partner for the service.
- Please provide a link from each event listed to the corresponding Songkick event page.
- Clearly attribute Songkick as the provider of concert data with the “Concerts by Songkick” logos found in section 2. (‘Attribution Requirements’) of our terms of use.

For our full terms of use please see http://www.songkick.com/developer/api-terms-of-use

Finally, make sure you check out our API group here: https://groups.google.com/forum/#!forum/songkick-api, this is where we’ll be announcing new features and changes to our API and you can also use it as somewhere to get feedback and support.

## Component Hierarchy

![alt text](https://github.com/ErnestineMoreno/MusicEventsSearchApp/blob/master/Component%20Hierarchy.png "Component Hierarchy")
