// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.get('/', ReviewController.getAllProjects);


module.exports = router;