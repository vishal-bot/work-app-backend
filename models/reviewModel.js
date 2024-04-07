// models/projectModel.js
const pool = require('../config/config');

class ReviewModel {
  static async getTasksUpdates(dt, id) {
    const query = 'Select * from tasks_updates t where Date(update_date) = $1 AND member_id = $2';
    const { rows } = await pool.query(query, [dt, id]);
    return rows;
  }

  static async getCommentsUpdates(dt, id) {
    const query = 'Select c.update_id, t.task_title, c.comment_text, c.update_date from tasks t join update_comments c on t.task_id = c.task_id where Date(c.update_date) = $1 AND c.member_id = $2';
    const { rows } = await pool.query(query, [dt, id]);
    return rows;
  }
  
}
module.exports = ReviewModel;