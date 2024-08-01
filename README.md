# Movie App

This is a simple web application that displays popular movies and allows users to search for movies using The Movie Database (TMDb) API.

## Features

- Displays popular movies sorted by popularity.
- Allows searching for movies by title.
- Shows movie details including title, rating, and overview.
- Ratings are color-coded based on their value (green for high, orange for medium, red for low).

## Technologies Used

- HTML
- CSS
- JavaScript
- [TMDb API](https://www.themoviedb.org/documentation/api)

## Getting Started

### Prerequisites

You need a web browser to run this application.

### Installation

1. Clone this repository or download the source code.
2. Open the `index.html` file in your web browser.

### Usage

1. Upon opening the app, it will display the most popular movies.
2. Use the search bar to find movies by title.
3. The results will display movie posters, titles, ratings, and overviews.

## Code Explanation

### HTML

The HTML structure includes:
- A header with a blinking title "Popular Movies".
- A main content area where movie details are displayed.
- A form for searching movies by title.

### CSS

The CSS styles include:
- Basic styling for movie elements.
- Color-coded ratings (green, orange, red) based on the score.
- A blinking animation for the header.

### JavaScript

The JavaScript code:
- Fetches popular movies from the TMDb API.
- Displays movies with their details.
- Allows searching for movies by title using the search form.
- Ensures the script runs after the DOM is fully loaded to avoid errors.

## API Usage

The app uses the following TMDb API endpoints:
- `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=YOUR_API_KEY&page=1` - To fetch popular movies.
- `https://api.themoviedb.org/3/search/movie?&api_key=YOUR_API_KEY&query=QUERY` - To search for movies by title.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- The Movie Database (TMDb) for providing the movie data API.
