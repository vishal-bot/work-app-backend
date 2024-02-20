// controllers/taskController.js
const TaskService = require('../services/taskService');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();
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
      const { title, description, status, priority, assignedTo } = req.body;
      const newTask = await pool.query(
        'INSERT INTO tasks (title, description, status, priority, assigned_to) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, description, status, priority, assignedTo]
      );
      res.status(201).json(newTask.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Get task by ID
  exports.getTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      console.log(taskId);
      const task = await TaskService.getTask(taskId);
    //   const task = await pool.query('SELECT * FROM tasks WHERE task_id = $1', [taskId]);
      if (task.rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  // Get newly added tasks
  exports.getNewTask = async (req, res) => {
    try {
      const task = await TaskService.getNewTasks(taskId);
      if (task.rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  
  // Update task by ID
  exports.updatedTask = async (req, res) => {
    try {
      const { taskId } = req.params;
      const { title, description, status, priority, assignedTo } = req.body;
      const updatedTask = await pool.query(
        'UPDATE tasks SET title = $1, description = $2, status = $3, priority = $4, assigned_to = $5 WHERE task_id = $6 RETURNING *',
        [title, description, status, priority, assignedTo, taskId]
      );
      if (updatedTask.rows.length === 0) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(updatedTask.rows[0]);
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
      res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };