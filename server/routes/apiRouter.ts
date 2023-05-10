import express, { Response, Request, NextFunction } from "express";
import apiController from '../controllers/apiController';

const router = express.Router();

router.post('/', apiController.openai, (req: Request, res:Response) => {
    res.status(200).json(res.locals.response);
});

export default router;