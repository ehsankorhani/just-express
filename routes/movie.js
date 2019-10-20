var express = require('express');
var router = express.Router();

// /* GET movies listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// based on https://developers.themoviedb.org API

const movieDetails = require('../data/movieDetails');


function requiredJSON(req, res, next) {
  if (!req.is('application/json')) {
    res.json({ msg: 'Content type must be application/json' });
  } else {
    next();
  }
}


router.param('movieId', (req, res, next) => {
  // update the db with analytics data
  // console.log('A route with the movieId wildcard has been hit!');
  next();
});


// /* GET movie/top_rated */
router.get('/top_rated', function(req, res, next) {
  let page = req.query.page;
  if (!page) { page = 1 };

  const result = movieDetails.sort((a, b) => {
    return b.vote_average - a.vote_average;
  });

  const indexToStart = (page - 1) * 20;
  results = result.slice(indexToStart, indexToStart + 19);
  res.json({results});

});

// /* GET movie/movieId */
// :movieId will match any value, so it should be moved to bottom. more specific path to top.
router.get('/:movieId', function(req, res, next) {
  const movieId = req.params.movieId;
  
  const result = movieDetails.find((movie) => {
    return movie.id == movieId;
  });

  if (!result) {
    res.send({
      msg: 'Movie Id does not exist'
    });
  } else {
    res.json(result);
  }
});


// POST   /movie/{movie-id}/rating
router.post('/:movieId/rating', requiredJSON, (req, res, next) => {
  const movieId = req.query.movieId;
  
  // need to accept only json content.
  // we can check the header by:
  console.log(req.get('content-type'));

  // if (!req.is('application/json')) {
  //   res.json({ msg: 'Content type must be application/json' });
  // } else {
  //   res.json('test');
  // }

  // instead of the above we put the middleware function in the POST route.
  // this way only this route will check for restriction.

  const userRating = req.body.value;
  if (userRating < .5 || userRating > 10) {
    res.json( { msg: 'rating must be between 0.5 and 10' } )
  } else {
    res.json( { msg: 'Thank you for submitting your rating', status_code: 200 } )
  }
  
});


// DELETE   /movie/{movie-id}/rating
router.delete('/:movieId/rating', requiredJSON, (req, res, next) => {
  res.json( { msg: 'rating deleted' } )
});

module.exports = router;
