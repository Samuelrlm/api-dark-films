const validateMovie = (req, res, next) => {
  const { titulo, diretor, ano, genero, nota, banner, sinopse } = req.body;

  if (!titulo || !diretor || !ano || !genero || !nota || !banner || !sinopse) {
    return res.status(400).json({
      error:
        "Todos os campos (titulo, diretor, ano, genero, nota, banner, sinopse) são obrigatórios.",
    });
  }

  next();
};

module.exports = validateMovie;
