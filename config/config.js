// config/config.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'cprldniw',
  host: 'lallah.db.elephantsql.com',
  database: 'cprldniw',
  password: 'q4o3GM_bjL1smKQlx3WqDwStvafsYoAE',
  port: 5432,
});

// Test the database connection
pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database', err);
    } else {
      console.log('Connected to the database');
    }
  });

module.exports = pool;
