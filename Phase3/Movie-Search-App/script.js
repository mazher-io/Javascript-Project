async function searchMovie() {
  const movieName = document.getElementById("movieName").value.trim();

  if (!movieName) return;

  const movieDetails = document.getElementById("movieDetails");
  movieDetails.innerHTML = "Loading...";

  const apiKey = "YOUR_OMDB_API_KEY";
  const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "False") {
      movieDetails.innerHTML = "Movie not found. Please try another title.";
      return;
    }

    movieDetails.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="Movie Poster">
        <p><strong>IMDb Rating:</strong> ${data.imdbRating}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
    `;
  } catch (error) {
    movieDetails.innerHTML = "Movie not found. Please try another title.";
  }
}
