import {query} from './db';
import fs from 'fs';
import {Client} from 'pg';
import path from 'path';

// ElephantSQL connection string
const connectionString = 'postgres://lgqxmgqq:ZR5NwFZPPxuOC-zvS5f-V4B4zL8NqJSW@drona.db.elephantsql.com/lgqxmgqq';

// Create a new PostgreSQL client
const client = new Client({ connectionString });

// Connect to the database
client.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    // Read the SQL script
    const sqlFilePath = path.join(__dirname, 'createDb.sql');
    const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');
  
    // Execute the SQL script
    client.query(sqlScript, async (error, results) => {
        if (error) {
          console.error('Error executing the SQL script:', error);
        } else {
          console.log('Tables created successfully!');
        
          // Read the questions JSON file
          const questionFilePath = path.join(__dirname, 'questions.json');
          const questionJson = fs.readFileSync(questionFilePath, 'utf8');
          const data = JSON.parse(questionJson);
          
          // Iterate over each category in the questions JSON data
          for (const category of data) {

            // Check if category already exists in Categories table
            const selectCategoryQuery = 'SELECT id FROM Categories WHERE category_name = $1';
            const selectCategoryValues = [category.category];
          
            try {
              const { rows: [categoryRow] } = await query(selectCategoryQuery, selectCategoryValues);
          
              // If category exists, use existing id
              if (categoryRow) {
                console.log(`Category '${category.category}' already exists with id ${categoryRow.id}`);
              } else {
                // Otherwise, insert new category and get new id
                const insertCategoryQuery = 'INSERT INTO Categories (category_name) VALUES ($1) RETURNING id';
                const insertCategoryValues = [category.category];
                const { rows: [newCategoryRow] } = await query(insertCategoryQuery, insertCategoryValues);
                console.log(`Inserted category '${category.category}' with id ${newCategoryRow.id}`);
                // categoryRow = newCategoryRow;
              }
          
              // Loop through questions in category and insert into Questions table
              for (const question of category.questions) {
                // Check if question already exists in Questions table
                const selectQuestionQuery = 'SELECT id FROM Questions WHERE category_id = $1 AND question_content = $2';
                const selectQuestionValues = [categoryRow.id, question.content];
          
                try {
                  const { rows: [questionRow] } = await query(selectQuestionQuery, selectQuestionValues);
          
                  // If question exists, log message
                  if (questionRow) {
                    console.log(`Question '${question.content}' already exists in category '${category.category}'`);
                  } else {
                    // Otherwise, insert new question
                    const insertQuestionQuery = 'INSERT INTO Questions (category_id, question_content) VALUES ($1, $2)';
                    const insertQuestionValues = [categoryRow.id, question.content];
                    await query(insertQuestionQuery, insertQuestionValues);
                    console.log(`Inserted question '${question.content}' into category '${category.category}'`);
                  }
                } catch (err) {
                  console.error(`Error checking question existence: ${err}`);
                }
              }
            } catch (err) {
              console.error(`Error checking category existence: ${err}`);
            }
          }
        }
      
        // Close the connection
        client.end();
      });
      
  });