import express, {Response, Request} from "express";
import loginController from "../controllers/loginController";
const router = express.Router();

router.post("/", loginController.checkLogin, (_req: Request, res: Response) => {
    return res.status(200).json({user: res.locals.user, exist: res.locals.exist});
});

router.post("/signup", loginController.createUser, (_req: Request, res: Response) => {
    return res.status(200).json(res.locals.newUser);
});

export default router;