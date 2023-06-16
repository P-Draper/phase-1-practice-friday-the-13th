fetch("http://localhost:3000/movies")
.then(res=>res.json())
.then(movies=>{
    movies.forEach(movie=> createMovie(movie))
    displayMovieDetails(movies[0])
}) 
function createMovie(movie) {
    const movieList = document.getElementById("movie-list")
    const movieImage = document.createElement("img")
    movieImage.src = movie.image
    movieImage.addEventListener("click", () => displayMovieDetails(movie))
    movieList.append(movieImage)
}
function displayMovieDetails(movie) {
    document.querySelector("#detail-image").src = movie.image
    document.querySelector("#title").textContent = movie.title
    document.querySelector("#year-released").textContent = movie.release_year
    document.querySelector("#description").textContent = movie.description
    document.querySelector("#watched").textContent = movie.watched ? "watched" : "unwatched"
    document.querySelector("#amount").textContent = movie.blood_amount
}

button.addEventListener("click", () =>{

})