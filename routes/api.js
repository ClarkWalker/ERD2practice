const express = require('express');
const db = require('../database/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  db.getDirectorOfMovie()
  .then((directorOfMovie) => {
    db.getActorsInMovie()
    .then((actors) => {

      const data = {
        allData: {
          actor: actors,
          director: directorOfMovie
        }
      };

      console.log('\nallData\n', data.allData);
      res.render('index', data);

    })
  });
});

module.exports = router;
