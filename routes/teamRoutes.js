// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const TeamController = require('../controllers/teamController');

router.get('/', TeamController.getAllMembers);
router.get('/:teamId', TeamController.getMembersByTeam);
router.get('/user/:memberId', TeamController.getMember);

module.exports = router;