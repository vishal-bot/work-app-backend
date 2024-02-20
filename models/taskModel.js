// models/taskModel.js
const pool = require('../config/config');

class TaskModel {
  static async getAllTasks() {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
  }

  // static async getTask(taskId) {
  //     const query = 'SELECT * FROM tasks WHERE task_id = $1', [taskId];
  //     const { rows } = await pool.query(query);
  //     return rows;
  // }

  static async getNewTask(){
    const query = 'SELECT * FROM tasks ORDER BY task_id DESC limit 4';
    const { rows } = await pool.query(query);
    return rows;
  }
  // Other model methods for CRUD operations
}

module.exports = TaskModel;
