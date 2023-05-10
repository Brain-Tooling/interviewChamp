import { Configuration, OpenAIApi } from "openai";
import { Response, Request, NextFunction } from "express";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


type RequestHandler = (req: Request, res: Response, next: NextFunction) => void;

interface ApiController {
  openai: RequestHandler;
}

//handle password and username authentication with database
// SELECT * FROM users WHERE usename = ? AND password = ?, [username, password]
const apiController: ApiController = {
  openai: async (req, res, next) => {
    const { question, answer } = req.body; //consider adding question id to end of url instead
    console.log(question);
    const prompt = `Review the following answer, ${answer}, and offer suggestions to improve. The question asked was ${question}. The response must be under 100 tokens`;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.1,
        max_tokens: 100,
        });
    console.log('THIS IS RESPONSE', response.data.choices[0].text)
    res.locals.response = response.data.choices[0].text;
    return next()
  },
};

export default apiController;
