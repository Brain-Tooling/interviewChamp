import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import passport from 'passport';
dotenv.config();

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;
interface OAuthController {
    getURL: RequestHandler
    useTokens: RequestHandler;
}

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// passport.use(new GoogleStrategy({
//     clientID: process.env.apiKey,
//     clientSecret: process.env.secretKey,
//     callbackURL: "http://localhost:3000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//       userProfile=profile;
//       return done(null, userProfile);
//   }
// ));
const oauthController: OAuthController = {
    getURL: (req, res, next) => {

    },
    useTokens: (req, res, next) => {

    },
};

export default oauthController;
