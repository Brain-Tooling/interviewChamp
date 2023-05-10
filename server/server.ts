import express, { Request, Response } from 'express';
import qrRouter from './routes/qrRouter';
import loginRouter from './routes/loginRouter';
import oauthRouter from './routes/oauthRouter';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const apiKey = process.env.apiKey;
const secretKey = process.env.secretKey;
const PORT = 5001 || process.env.PORT;

const app = express();

app.set('view engine', 'ejs');

// Adds cors
app.use(cors());

// Adds body parser
app.use(express.json());

// CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//Handles route to qrRouter
app.use('/qr', qrRouter);

//Handles route to loginRouter
app.use('/login', loginRouter);

//Handles route to oauthRouter
app.use('/auth', oauthRouter);

app.get('/', (_req: Request, res: Response) => {
  return res.send('Reached endpoint');
});

//Creates type for error handler
type ErrHndl = {
  log: string;
  status: number;
  message: {
    err: string;
  };
};

// Handle errors
app.use((err: ErrHndl, req: Request, res: Response) => {
  const defaultErr: ErrHndl = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj: ErrHndl = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
