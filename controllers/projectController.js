// controllers/taskController.js
const pool = require('../config/config');
const ProjectModel = require('../models/projectModel');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProjectByTeam = async (req, res) => {
  const { teamId } = req.params;
  try {
    const projects = await ProjectModel.getProjectByTeam(teamId);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getProject = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await ProjectModel.getProject(projectId);
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getProjectTasks = async (req, res, next) => {
  const { projectId } = req.params;
  try {
    const project = await ProjectModel.getProjectTasks(projectId);
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};