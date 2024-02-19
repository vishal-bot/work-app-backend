// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.post('/login', AuthController.login);
// Define other routes for registration, logout, etc.
router.post('/register', AuthController.register);

router.post('/logout', AuthController.logout);

module.exports = router;
