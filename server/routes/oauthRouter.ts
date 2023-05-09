import express, {Response, Request} from "express";
import oauthController from "../controllers/oauthController";
import passport from "passport";
const router = express.Router();
router.use(passport.initialize())
router.use(passport.session())


router.post("/login", oauthController.getURL, oauthController.useTokens, (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.googleUser);
});

export default router;