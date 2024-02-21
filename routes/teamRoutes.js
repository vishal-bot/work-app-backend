// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

router.get('/', TeamController.getAllMembers);


module.exports = router;