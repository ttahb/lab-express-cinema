const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next)=>{
    Movie.find()
        .then(movies => {
            console.log('Movies from db', movies);
            res.render('movies',{ movies});
        })
        .catch(error => {
            console.log('Error while getting movies from the DB!', error);

            next(error);
        });
});


router.get('/movies/:id', (req, res, next)=>{
    const movieId = req.params.id;
    Movie.findOne({_id: movieId})
        .then(movie => {
            console.log("movie", movie);
            res.render('movie.hbs', movie);
        })
        .catch(error=> {
            console.log('Error while getting movie detail from db!', error);
            next(error);
        });
});

module.exports = router;