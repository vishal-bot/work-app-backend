// controllers/taskController.js
const pool = require('../config/config');
const ReviewModel = require('../models/reviewModel');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
