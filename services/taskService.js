// services/taskService.js
const TaskModel = require('../models/taskModel');

class TaskService {
  static async getAllTasks() {
    return await TaskModel.getAllTasks();
  }

  static async getTask(taskId) {
    return await TaskModel.getTask(taskId);
  }

  static async getNewTask(){
    return await TaskModel.getNewTask();
  }
  // Other service methods for task-related business logic
}

module.exports = TaskService;
