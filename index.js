const express = require('express')
const dotenv =  require('dotenv');
const sequelize = require('./src/config/database.js');
const movieRoutes = require('./src/routes/movieRoutes.js');
const { errorHandler } = require('./src/middlewares/errorHandler.js');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api', movieRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 4040;

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
  }
})();
