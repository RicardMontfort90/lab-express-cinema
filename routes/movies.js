const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model.js');

/* GET all movies page */
/* ROUTE /movies */
router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find({});
        res.render('movies', { movies });
    } catch (error) {
        next(error);
    }
});

/* GET See more page */
/* ROUTE /movies/:movieId */
router.get('/:movieId', async (req, res, next) => {
    const { movieId } = req.params;
    try {
        const movie = await Movie.findById(movieId);
        res.render('more-info', movie);
    } catch (error) {
        next(error);
    }
});

module.exports = router;