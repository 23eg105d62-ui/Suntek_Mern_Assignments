/*Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//filter() only "Sci-Fi" movies
let sciFiMovies = movies.filter(movieObj => movieObj.genre === "Sci-Fi")
console.log(sciFiMovies);
//map() to return: "Inception (8.8)"
let movieTitlesWithRatings = movies.map(movieObj => `${movieObj.title} (${movieObj.rating})`)
console.log(movieTitlesWithRatings);
//reduce() to find average movie rating
let totalRating = movies.reduce((acc, movieObj) => acc + movieObj.rating, 0)
let avgRating = totalRating / movies.length
console.log(avgRating);
//find() movie "Joker"
let jokerMovie = movies.find(movieObj => movieObj.title === "Joker")
console.log(jokerMovie);
//findIndex() of "Avengers"
let avengersIndex = movies.findIndex(movieObj => movieObj.title === "Avengers")
console.log(avengersIndex); 