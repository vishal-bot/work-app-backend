// controllers/taskController.js
const pool = require('../config/config');
const TaskModel = require('../models/taskModel');
const TaskService = require('../services/taskService');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getTasksByTeam = async (req, res) => {
  const { teamId } = req.params;
  try {
    const tasks = await TaskService.getTasksByTeam(teamId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Other controller methods for CRUD operations
// Routes for CRUD operations on tasks
// Create task
exports.addTask = async (req, res) => {
    try {
      const { task_title, task_desc, stage, status, priority, assigned_to, project_id } = req.body;
      const newTask = await TaskModel.createTask(task_title, task_desc, stage, status, priority, assigned_to, project_id);
      res.json(newTask);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Get task by ID
  exports.getTask = async (req, res, next) => {
    const { taskId } = req.params;
      // console.log(taskId);
    try {
      const task = await TaskService.getTask(taskId);
      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  // Get newly added tasks
  exports.getNewTask = async (req, res) => {
    try {
      const task = await TaskService.getNewTask();
      // if (task.rows.length === 0) {
      //   return res.status(404).json({ message: 'Task not found' });
      // }
      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Update task by ID
  exports.updatedTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { task_title, task_desc, stage, status, priority, assigned_to } = req.body;
      const updatedTask = await TaskModel.updateTask(task_title, task_desc, stage, status, priority, assigned_to, taskId);
      res.json(updatedTask);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

    // Update task by ID
    exports.updateStage = async (req, res) => {
      try {
        const { taskId } = req.params;
        const { task_title, task_desc, stage, status, priority, assigned_to } = req.body;
        const updateStage = await TaskModel.updateStage(task_title, task_desc, stage, status, priority, assigned_to, taskId);
        res.json(updateStage);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    };
  
  // Delete task by ID
  exports.deletedTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const deletedTask = await pool.query('DELETE FROM tasks WHERE task_id = $1 RETURNING *', [taskId]);
      if (deletedTask.rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      // const { selectedTask } = req.params;
      // const deletedTask = await TaskModel.deleteTask(selectedTask);
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  exports.addTaskCmnt = async (req, res) => {
    try {
      const { task_id, member_id, member_name, comment_text } = req.body;
      const newTask = await TaskModel.createTaskCmnt(task_id, member_id, member_name, comment_text);
      res.json(newTask);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Get task by ID
  exports.getTaskCmnt = async (req, res, next) => {
    const { taskId } = req.params;
      // console.log(taskId);
    try {
      const task = await TaskModel.getTaskCmnt(taskId);
      res.json(task);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };