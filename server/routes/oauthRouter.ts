import express, {Response, Request} from "express";
import oauthController from "../controllers/oauthController";
const router = express.Router();

router.post("/", oauthController, (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.googleUser);
});

export default router;