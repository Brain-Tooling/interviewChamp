import { Request, Response, NextFunction } from 'express';
import { query } from '../database/db';

/**
 * @description middleware for handling question/response events such as saving responses and retrieving questions
 */
interface qrController {
  getQuestions: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  storeResponse: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  getResponses: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

const qrController: qrController = {
  //returns questions based on passed in category
  getQuestions: async (req, res, next) => {
    const { category } = req.params;
    //inner join -> questions table joined together with the categories table, replacing the category id column with the category name
    const selectQuestionsQuery = `
          SELECT Q.id, Q.question_content, C.category_name
          FROM Questions Q
          JOIN Categories C ON Q.category_id = C.id
          WHERE C.category_name = $1
        `;
    const selectQuestionsValues = [category];

    try {
      const { rows } = await query(selectQuestionsQuery, selectQuestionsValues);
      //creates an array of question objects containing the question and question id
      const q = rows.map(({ id, question_content }) => ({
        id,
        question_content,
      }));
      res.locals.questions = q;
      next();
    } catch (err) {
      console.error(`Error fetching questions: ${err}`);
      res.sendStatus(500);
    }
  },
  //stores a users response inside of the database
  storeResponse: async (req, res, next) => {
    console.log('got req to store response')
    const { user_id, question_id, response_content } = req.body;
    console.log('body is ', req.body)

    // Check if question exists
    const selectQuestionQuery = 'SELECT * FROM Questions WHERE id = $1';
    const selectQuestionValues = [question_id];
    try {
      const {
        rows: [questionRow],
      } = await query(selectQuestionQuery, selectQuestionValues);

      if (!questionRow) {
        res.status(404).send(`Question with id ${question_id} not found`);
        return;
      }

      // Insert response into Responses table
      const insertResponseQuery = `INSERT INTO Responses (user_id, question_id, response_content)
        VALUES ($1, $2, $3)
        ON CONFLICT (user_id, question_id)
        DO UPDATE SET response_content = EXCLUDED.response_content`;
      const insertResponseValues = [user_id, question_id, response_content];
      await query(insertResponseQuery, insertResponseValues);

      next();
    } catch (err) {
      console.error(`Error storing response: ${err}`);
      res.sendStatus(500);
    }
  },
  //gets all of the user responses for a user based on the passed in user id and category
  getResponses: async (req, res, next) => {
    const { user_id, category_name } = req.params;

    // Get all responses for a user for a given category
    const selectResponsesQuery = `
      SELECT R.id, R.response_content, R.question_id, Q.question_content
      FROM Responses R
      JOIN Questions Q ON Q.id = R.question_id
      JOIN Categories C ON C.id = Q.category_id
      WHERE R.user_id = $1 AND C.category_name = $2
    `;
    const selectResponsesValues = [user_id, category_name];
    console.log(selectResponsesValues);
    try {
      const { rows } = await query(selectResponsesQuery, selectResponsesValues);
      const response = rows.map(
        ({ id, response_content, question_id, question_content }) => ({
          id,
          response_content,
          question_id,
          question_content,
        })
      );
      console.log('hello', rows);
      res.locals.responses = response;
      next();
    } catch (err) {
      console.error(`Error fetching responses: ${err}`);
      res.sendStatus(500);
    }
  },
};

export default qrController;
