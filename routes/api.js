const express = require('express');
const db = require('../database/queries');

const router = express.Router();

router.get('/', (req, res, next) => {
  db.getMovies()
  .then((dData) => {
    db.getAllActorData()
    .then((aData) => {
      let movieData =
      db.joinData(dData, aData);
      /** /
      res.send(movieData);
      /*/
      res.render('index', {
        movieData: movieData
      });
      /**/
    });
  });
});

// router.post('/addMovie', (req,res)=>{
//   let newMovie = req.body
//   console.log(newMovie);
//   db.checkDirectors(newMovie)
//   .then(data=>{
//     if (data.length === 0) {
//       db.addDirector(newMovie)
//       .then(newId=>{
//         console.log(newId)
//         db.checkActor(newMovie)
//         .then(data=>{
//           if(data.length===0) {
//             db.addActor(newMovie)
//             .then(actId=>{
//
//             })
//           }
//         })
//       })
//     }
//
//   })
//
// })

router.delete('/', (req, res, next) => {
  db.deleteData(req.params.id);
});

module.exports = router;
