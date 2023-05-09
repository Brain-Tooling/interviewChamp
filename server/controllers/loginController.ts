import { Request, Response, NextFunction } from "express";
import { query } from "../database/db";

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
  checkLogin: async (req, res, next) => {
    try {
      const credentials: Credentials = req.body;
      const params = [credentials.username, credentials.password];
      const text = `SELECT * FROM Users WHERE username = $1 AND password = $2`;
      const result = await query(text, params);
      // console.log('THIS IS RESULT --------->', result)
      if (result.rows[1]) {
        res.locals.user = result.rows[0].id;
        console.log('THIS IS RES.LOCALS.USER', res.locals.user);
        return next();
      } else {console.log("does nto exist")}
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
      console.log(credentials);
      // console.log('THIS IS USERNAME', credentials.username);
      const text = `INSERT INTO Users (username, password) VALUES ($1, $2) RETURNING *`;
      const username = credentials.username;
      const password = credentials.password;
      const params = [username, password];
      const result = await query(text, params);
      console.log("THIS IS RESULT --------->", result.rows[0]);
      if (result.rows.length > 0) {
        res.locals.newUser = result.rows[0].id;
        console.log("THIS IS NEWUSER", res.locals.newUser);
        return next();
      } else {
        return next();
      }
    } catch (err) {
      next({
        log: "Express error handler caught in createUser controller",
        status: 500,
        message: { err: "Creating account unsuccessful" },
      });
    }
  },
};

export default loginController;
