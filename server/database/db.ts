import { Pool } from 'pg';

const PG_URI =
  'postgres://lgqxmgqq:ZR5NwFZPPxuOC-zvS5f-V4B4zL8NqJSW@drona.db.elephantsql.com/lgqxmgqq';

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
