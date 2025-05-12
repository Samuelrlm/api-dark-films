const Movie = require('../models/movie.js');

const createMovie = async (req, res, next) => {
  try {
    const { titulo, diretor, ano, genero, nota, banner, sinopse } = req.body;
    const movie = await Movie.create({ titulo, diretor, ano, genero, nota, banner, sinopse });
    res.status(201).json(movie);
  } catch (error) {
    next(error);
  }
};


const listMovies = async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }
    res.json(movie);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createMovie,
  listMovies,
  getMovieById
};
