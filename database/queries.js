const knex = require('./connection');

function getAllMovieData() {
  return knex('movies');
}

function getAllActorData() {
  return knex('people');
}

function getPeople() {
  return knex('people');
}

function getAllMovies() {
  return knex('movies');
}

function joinData(dData, aData) {
  let movieArr = [];
  let movieObj = new Object();
}

function getDirectorOfMovie() {
  return knex('movies')
  .select()
//.join('people', 'people.id', 'director_id');
  .join('people', 'people.id', 'director_id');
}

function getActorsInMovie() {
  return knex('people_movies')
  .select()
  .join('people', 'people.id', 'people_id')
  .join('movies', 'movies.id', 'movie_id')
}

function deleteData(id) {
  return knex('people_movies')
  .del()
  .where('movie_id', id);
}

function addMovie(data) {
  return knex('movies')
  .insert(data)
}

function addPerson(data) {
  return knex('people')
  .insert(data)
}

function addDirector(data) {
  return knex('movies')
  .select()
  .where('title', data.movie)
  .update({director_id: data.director})
}

function addActorToMovie(data) {
  return knex('people_movies')
  .insert(data)
}

module.exports = {
  // get data
  getAllMovieData,
  getAllActorData,
  joinData,
  deleteData,

  addMovie,
  addPerson,
  getPeople,
  getAllMovies,
  addDirector,
  addActorToMovie
};
