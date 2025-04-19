// API URL with your API key
const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=e86bc9c";

// Function to fetch movie data
async function fetchMovieData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.Response === "True") {
      displayMovieData(data); // Call a function to display the movie data
    } else {
      console.error("Error:", data.Error);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Function to display the movie data
function displayMovieData(movie) {
  // Example: Log the movie data to the console
  console.log("Movie Data:", movie);

  // Dynamically create HTML to display movie details
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = `
    <h2>${movie.Title} (${movie.Year})</h2>
    <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}" alt="${movie.Title}">
    <p><strong>Genre:</strong> ${movie.Genre}</p>
    <p><strong>Director:</strong> ${movie.Director}</p>
    <p><strong>Plot:</strong> ${movie.Plot}</p>
    <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
  `;
}

// Call the fetchMovieData function
fetchMovieData();
