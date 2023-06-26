import app from './app.js';
import RandomDB from './database/database.random.js';
import './models/models.random.js';

const main = async(req, res) => {
  try {
    await RandomDB.sync({force: false})
    app.listen(3000, () => {
      console.log('Server listen on port', 3000)
    });
  }
  catch(err) {
    console.error('Error de conexion')
  }
}

main()