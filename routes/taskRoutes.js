// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/tasks', TaskController.getAllTasks);
// Define other routes for task-related endpoints
router.get('/tasks/:taskId', TaskController.getTask);

router.post('/tasks', TaskController.addTask);

router.put('/tasks/:taskId', TaskController.updatedTask);

router.delete('/tasks/:taskId', TaskController.deletedTask);


module.exports = router;
