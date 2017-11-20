const knex = require('./connection');

function getAllMovieData() {
  return knex('movies');
}

function getAllActorData() {
  return knex('people');
}

function getAllRoleData() {
  return knex('roles');
}



module.exports = {
  // get data
  getAllMovieData,
  getAllActorData,
  getAllRoleData
};
