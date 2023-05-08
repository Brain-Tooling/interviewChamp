import { Request, Response, NextFunction } from "express";
import {query} from '../database/db';

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

interface LoginController {
  checkLogin: RequestHandler;
  createUser: RequestHandler;
}
interface Credentials {
  username: string;
  password: string;
}

//handle password and username authentication with database
// SELECT * FROM users WHERE usename = ? AND password = ?, [username, password]
const loginController: LoginController = {
  checkLogin: async (req, res, next): Promise<void> => {
    try {
      const credentials: Credentials = req.body;
      const text = `SELECT * FROM users WHERE usename = $1 AND password = $2`;
      const result = await query(text, credentials, () => console.log('login success'));
      console.log('THIS IS RESULT --------->', result)
      if (result) {
        res.locals.user = result.rows[0];
        return next();
      } else {
        return next();
      }
    } catch (err) {
      next({
        log: "Express error handler caught in checkLogin controller",
        status: 500,
        message: { err: "Invalid credentials" },
      });
    }
  },
  createUser: async (req, res, next): Promise<void> => {
    try {  
        const credentials: Credentials = req.body;
        const text = `INSERT INTO user (username, password) VALUES ($1, $2)`;
        const result = await query(text, credentials, () => console.log('added new user'));
        console.log('THIS IS RESULT --------->', result);
        if (result) {
            console.log(result);
            res.locals.newUser = result.rows[0];
        } else {
            return next();
        }
    } catch(err) {
        next({
            log: "Express error handler caught in createUser controller",
            status: 500,
            message: { err: "Creating account unsuccessful" },
        })
    }
  }
};

export default loginController;
