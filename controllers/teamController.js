// controllers/teamController.js
const pool = require('../config/config');
const TeamService = require('../services/teamService');

exports.getAllMembers = async (req, res) => {
    try {
        const team = await TeamService.getAllMembers();
        res.json(team);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};