// models/projectModel.js
const pool = require('../config/config');

class ProjectModel {
  static async getAllProjects() {
    const query = 'SELECT * FROM projects';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getProject(projectId) {
    try {
      const { rows } = await pool.query('SELECT * FROM projects WHERE project_id = $1', [projectId]);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching project by ID');
    }
  }

  static async getProjectTasks(projectId) {
    try {
      const { rows } = await pool.query('SELECT * FROM tasks WHERE project_id = $1', [projectId]);
      return rows;
    } catch (error) {
      console.log(error);
      throw new Error('Error fetching tasks by projectID');
    }
  }
}

module.exports = ProjectModel;