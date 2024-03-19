// config/config.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'cprldniw',
  host: 'lallah.db.elephantsql.com',
  database: 'cprldniw',
  password: 'q4o3GM_bjL1smKQlx3WqDwStvafsYoAE',
  port: 5432,
});

// const pool = new Pool({
//   user: 'webuser1',
//   host: 'localhost',
//   database: 'work-app',
//   password: 'postgres',
//   port: 5432,
// });

// const pool = new Pool({
//   connectionString: 'postgres://cprldniw:q4o3GM_bjL1smKQlx3WqDwStvafsYoAE@lallah.db.elephantsql.com/cprldniw',
// });

// Test the database connection
pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database', err);
    } else {
      console.log('Connected to the database');
    }
  });

module.exports = pool;
