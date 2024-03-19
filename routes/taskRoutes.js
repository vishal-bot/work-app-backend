// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/', TaskController.getAllTasks);
router.get('/team/:teamId', TaskController.getTasksByTeam);
router.get('/new', TaskController.getNewTask);
router.get('/:taskId', TaskController.getTask);
router.post('/', TaskController.addTask);
router.put('/:taskId', TaskController.updatedTask);
router.put('/stage/:taskId', TaskController.updateStage);
router.delete('/:taskId', TaskController.deletedTask);
router.get('/cmnt/:taskId', TaskController.getTaskCmnt);
router.post('/cmnt', TaskController.addTaskCmnt);

module.exports = router;
