// models/taskModel.js
const pool = require('../config/config');

class TaskModel {
  static async getAllTasks() {
    const query = 'SELECT * FROM tasks';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getTask(taskId) {
    // console.log(taskId);
    try {
      const { rows } = await pool.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);
      return rows;
    } catch (error) {
      throw new Error('Error fetching task by ID');
    }
  }

  static async getNewTask(){
    const query = 'SELECT * FROM tasks ORDER BY task_id DESC limit 4';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createTask(title, description, status, priority, assignedTo) {
    try {
      const { rows } = await pool.query('INSERT INTO tasks (title, description, status, priority, assigned_to) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, description, status, priority, assignedTo]);
      return rows[0];
    } catch (error) {
      throw new Error('Error creating task');
    }
  }

  static async updateTask(id, title, description, status, priority, assignedTo) {
    try {
      const { rows } = await pool.query('UPDATE tasks SET title = $1, description = $2, status = $3, priority = $4, assigned_to = $5 WHERE id = $6 RETURNING *', [title, description, status, priority, assignedTo, id]);
      return rows[0];
    } catch (error) {
      throw new Error('Error updating task');
    }
  }

  static async deleteTask(id) {
    try {
      await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    } catch (error) {
      throw new Error('Error deleting task');
    }
  }
  // Other model methods for CRUD operations
}

module.exports = TaskModel;
