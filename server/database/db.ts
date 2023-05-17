import { Pool } from 'pg';
import DE from 'dotenv';

DE.config();

const PG_URI =
  process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

export const query = (
  text: string,
  params: any,
  callback?: (err: Error | null, result?: any) => void
) => {
  console.log('executed query', text);
  return pool.query(text, params); //removed third callback param
};
