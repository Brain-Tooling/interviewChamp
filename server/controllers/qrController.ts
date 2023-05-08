import { Request, Response, NextFunction } from 'express';
import {query} from '../database/db';
import questions from '.../questions'

/**
 * @description middleware for handling question/response events such as loading questions into the db, saving responses, and retrieving questions
 */
interface qrController {
getQuestions: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;

}

const qrController: qrController = {

   getQuestions:

}

export default qrController;