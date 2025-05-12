const express = require('express');
const { createMovie, listMovies, getMovieById } = require('../controllers/movieController.js');
const validateMovie = require('../middlewares/validateMovie.js');
const router = express.Router();

router.post('/movies', validateMovie, createMovie);
router.get('/movies', listMovies);
router.get('/movies/:id', getMovieById);

module.exports = router;
