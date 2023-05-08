import {Request, Response, NextFunction} from "express"

type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;
// interface OAuthController {
//     checkLogin: RequestHandler
// }

const oauthController = {}

export default oauthController;