// models/projectModel.js
const pool = require('../config/config');

class ReviewModel {
  static async getAllProjects() {
    const query = 'SELECT * FROM projects';
    const { rows } = await pool.query(query);
    return rows;
  }
  
}
module.exports = ReviewModel;