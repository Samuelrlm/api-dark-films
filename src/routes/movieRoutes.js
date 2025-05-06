const express = require('express');
const { createMovie, listMovies } = require('../controllers/movieController.js');
const validateMovie = require('../middlewares/validateMovie.js');
const router = express.Router();

router.post('/movies', validateMovie, createMovie);
router.get('/movies', listMovies);

module.exports = router;
