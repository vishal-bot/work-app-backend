// models/taskModel.js
const pool = require('../config/config');

class TaskModel {
  static async getAllTasks() {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getTask(taskId) {
      const task = await pool.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);
  }

  // Other model methods for CRUD operations
}

module.exports = TaskModel;
