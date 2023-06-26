import express from 'express';
import morgan from 'morgan';
import router from './routes/routes.random.js';
import cors from 'cors';
const app = express();

app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    })
  );
app.use(morgan('dev'));
app.use(express.json());
app.use('/api',router);


export default app