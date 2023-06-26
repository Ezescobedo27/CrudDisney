import app from './app.js';
import RandomDB from './database/database.random.js';
import './models/models.random.js';

const main = async(req, res) => {
  try {
    await RandomDB.sync({force: false});
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log('Server listen on port', PORT)
    });
  }
  catch(err) {
    console.error('Error de conexion')
  }
}

main()