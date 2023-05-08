/**
 * @module qr router
 * @description handle all routes for question and response queries
 */
import { Request, Response, Router } from 'express';
import qrController from '../controllers/qrController';

const router = Router();

router.get('/setUp', qrController.buildDb, (req: Request, res: Response): Response => {
    return res.status(201).json({response: 'questions are loaded'});
  });

  export default router;