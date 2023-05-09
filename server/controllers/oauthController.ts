// oauthController.ts
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { query } from "../database/db";

dotenv.config();

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

interface OAuthController {
  checkEmail: RequestHandler;
}

interface Credentials {
  username: string;
  password: string;
}

let email: string;

const oauthController: OAuthController = {
  checkEmail: async (req, res, next) => {
    try {
      const email = res.locals.email;
      const params = [email];
      let text = `SELECT * FROM Users WHERE username = $1`;
      let result = await query(text, params);
      console.log('THIS IS RESULT --------->', result)
      if (result.rows[0]) {
        res.locals.user = result.rows[0].id;
        return next();
      } else {
        text = `INSERT INTO Users (username, password) VALUES ($1, $2) RETURNING *`;
        const username = email;
        const password = "12345678";
        const params = [username, password];
        const result = await query(text, params);
        if (result.rows.length > 0) {
          res.locals.newUser = result.rows[0].id;
          return next();
        }
      }
    } catch (err) {
      return next(err);
    }
  },
};

export default oauthController;
