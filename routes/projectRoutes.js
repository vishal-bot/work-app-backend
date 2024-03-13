// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/projectController');

router.get('/', ProjectController.getAllProjects);
router.get('/:projectId', ProjectController.getProject);
router.get('/tasks/:projectId', ProjectController.getProjectTasks);

module.exports = router;