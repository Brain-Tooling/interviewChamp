/**
 * @module qr router
 * @description handle all routes for question and response queries
 */
import { Request, Response, Router } from 'express';
import qrController from '../controllers/qrController';

const router = Router();

router.get(
  '/getQuestions/:category',
  qrController.getQuestions,
  (req: Request, res: Response): Response => {
    return res.status(200).json(res.locals.questions);
  }
);

router.post(
  '/storeResponse',
  qrController.storeResponse,
  (req: Request, res: Response): Response => {
    return res.status(200).json('Response stored');
  }
);

router.get(
  '/getResponses/:user_id/:category_name',
  qrController.getResponses,
  (req: Request, res: Response): Response => {
    return res.status(200).json(res.locals.responses);
  }
);

export default router;
