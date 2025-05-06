const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Movie = sequelize.define('Movie', {
    titulo: { type: DataTypes.STRING, allowNull: false },
    diretor: { type: DataTypes.STRING, allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false },
    genero: { type: DataTypes.STRING, allowNull: false },
    nota: { type: DataTypes.FLOAT, allowNull: false },
    banner: { type: DataTypes.STRING, allowNull: true },
    sinopse: { type: DataTypes.TEXT, allowNull: true }, // novo campo
  });
  

module.exports = Movie;
