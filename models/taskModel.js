// models/taskModel.js
const pool = require('../config/config');

class TaskModel {
  static async getAllTasks() {
    const query = 'SELECT * FROM tasks ORDER BY task_id DESC';
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
    const query = 'SELECT * FROM tasks ORDER BY task_id DESC';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async createTask(task_title, task_desc, stage, status, priority, assigned_to, project_id) {
    try {
      const { rows } = await pool.query('INSERT INTO tasks (task_title, task_desc, stage, status, priority, assigned_to, project_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [task_title, task_desc, stage, status, priority, assigned_to, project_id]);
      return rows[0];
    } catch (error) {
      throw new Error('Error creating task');
    }
  }

  static async updateTask(task_title, task_desc, stage, status, priority, assigned_to, task_id) {
    try {
      const { rows } = await pool.query('UPDATE tasks SET task_title = $1, task_desc = $2, stage = $3, status = $4, priority = $5, assigned_to = $6 WHERE task_id = $7 RETURNING *', [task_title, task_desc, stage, status, priority, assigned_to, task_id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      return rows[0];
    } catch (error) {
      console.log(error);
      throw new Error('Error updating task');
    }
  }

  static async deleteTask(selectedTask) {
    try {
      await pool.query('DELETE FROM tasks WHERE task_id = $1', [selectedTask]);
    } catch (error) {
      throw new Error('Error deleting task');
    }
  }
  // Other model methods for CRUD operations
}

module.exports = TaskModel;
