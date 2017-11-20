const express = require('express');
const db = require('../database/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  db.getAllMovieData()
  .then((allMovieData) => {
    db.getAllActorData()
    .then((allActorData) => {
      db.getAllRoleData()
      .then((allRoleData) => {
        const allData = {
          movieData: allMovieData,
          actorData: allActorData,
          roleData: allRoleData
        };
        console.log(
          '\nallData\n', allData);
        res.render('index', allData);
      });
    });
  });
});
module.exports = router;
