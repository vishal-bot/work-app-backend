// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');

router.get('/', TaskController.getAllTasks);
router.get('/new', TaskController.getNewTask);
router.get('/:taskId', TaskController.getTask);
router.post('/', TaskController.addTask);
router.put('/:taskId', TaskController.updatedTask);
router.delete('/:taskId', TaskController.deletedTask);


module.exports = router;
