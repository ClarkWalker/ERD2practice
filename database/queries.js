const knex = require('./connection');

function getAllMovieData() {
  return knex('movies');
}

function getAllActorData() {
  return knex('people');
}

function getAllRoleData() {
  return knex('people_movies');
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

function movieData(director, actor) {
  for (var i = 0; i < director.length; i++) {
    director[i]
  }
}

module.exports = {
  // get data
  getAllMovieData,
  getAllActorData,
  getAllRoleData,
  getDirectorOfMovie,
  getActorsInMovie
};
