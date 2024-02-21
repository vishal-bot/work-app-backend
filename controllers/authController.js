// controllers/authController.js
const AuthService = require('../services/authService');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await AuthService.login(username, password);
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Other controller methods for registration, logout, etc.
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        await AuthService.register(username, password);
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// controllers/authController.js
exports.logout = async (req, res) => {
    // Implement logout logic (e.g., invalidate JWT token)
    res.json({ message: 'Logout successful' });
};
