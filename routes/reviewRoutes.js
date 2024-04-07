// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.get('/task/:dt/:id', ReviewController.getTasksUpdates);
router.get('/cmnt/:dt/:id', ReviewController.getCommentsUpdates);


module.exports = router;