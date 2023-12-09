const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next)=>{
    Movie.find()
        .then(movies => {
            console.log('Movies from db', movies);
            res.render('movies',{ movies})
        })
        .catch(error => {
            console.log('Error while getting books from the DB!', error)

            next(error);
        });
});

module.exports = router;