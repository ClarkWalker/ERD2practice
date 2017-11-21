const express = require('express');
const db = require('../database/queries');
const router = express.Router();

router.get('/', (req, res, next) => {
  db.getMovies()
  .then((dData) => {
    db.getAllActorData()
    .then((aData) => {
      db.getPeople()
      .then((people) => {
        db.getAllMovies()
        .then((movies) => {

          let movieData = db.joinData(dData, aData);
          // console.log(movieData);
          res.render('index', {
            movieData: movieData,
            aData: aData,
            people: people,
            movies: movies
          });

        });
      });
    });
  });
});

router.post('/addMovie', (req, res, next) => {
  console.log(req.body.title[0]);
  db.addMovie(req.body)

  .then((data) => {
    res.redirect('/');
  });
});

router.post('/addPerson', (req, res, next) => {
  console.log(req.body);
  db.addPerson(req.body)
  .then((data) => {
    res.redirect('/')
  });
});

router.put('/changeDirector', (req, res, next) => {
  console.log('/changeDirector');
  db.addDirector(req.body)
  .then((data) => {
    console.log(data);
    res.redirect('/');
  });
});

router.post('/addActorToMovie', (req, res, next) => {
  // console.log(req.body);
  db.addActorToMovie(req.body)
  .then((data) => {
    res.redirect('/');
  });
});

router.delete('/deleteMovie/', (req, res, next) => {
  console.log('/delete movie', req.body.movie_id);
  db.deleteData(req.body.movie_id)
  .then((data) => {
    res.redirect('/');
  });
});


module.exports = router;
