// controllers/taskController.js
const pool = require('../config/config');
const ReviewModel = require('../models/reviewModel');

exports.getTasksUpdates = async (req, res) => {
  const { dt } = req.params;
  const { id } = req.params;
  // console.log(typeof id);
  // console.log(typeof dt);
  try {
    const Tupdates = await ReviewModel.getTasksUpdates(dt, id);
    res.json(Tupdates);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCommentsUpdates = async (req, res) => {
  const { dt } = req.params;
  const { id } = req.params;
  try {
    const Cupdates = await ReviewModel.getCommentsUpdates(dt, id);
    res.json(Cupdates);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

