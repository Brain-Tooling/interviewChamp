// router.ts
import express, { Response, Request, NextFunction } from "express";
import oauthController from "../controllers/oauthController";
import passport from "passport";
import dotenv from "dotenv";
const router = express.Router();
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

dotenv.config();

interface UserWithExtraFields {
    email: string;
}
  

router.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);

let userProfile: any;

router.get("/success", (req, res) => res.send("successful login"));
router.get("/error", (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj: any, cb) {
  cb(null, obj);
});

router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "444805898561-boptbjpse6tfcfq1p6joiq3qnkluk44h.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:5001/auth/google/callback",
      proxy:true,
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) {
      let userProfile = profile;
      let email = profile.emails ? profile.emails[0].value : null;
      return done(null, { userProfile, email });
    }
  )
);

//get the link
router.get("/google", passport.authenticate("google", { scope: "email" }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }),
  (req: Request, res: Response, next: NextFunction) => {
    if (req.user) {
      const user = req.user as UserWithExtraFields;
      res.locals.email = user.email;
      return next();
    } else {
      res.redirect("/error");
    }
  },
  oauthController.checkEmail,
  (_req: Request, res: Response) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

export default router;
