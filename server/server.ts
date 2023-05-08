import express, { Request, Response } from "express";
import qrRouter from './routes/qrRouter';
import loginRouter from './routes/loginRouter';
import oauthRouter from './routes/oauthRouter';

const app = express();
const PORT = 5001;

// Adds body parser
app.use(express.json());

//Handles route to qrRouter
app.use('/qr', qrRouter);

//Handles route to loginRouter
app.use('/login', loginRouter);

//Handles route to oauthRouter
app.use('/oauth', oauthRouter);

app.get("/", (_req: Request, res: Response) => {
    return res.send("Reached endpoint")
});

app.listen(PORT, (): void => {
    console.log("listening on port ", PORT )
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
  