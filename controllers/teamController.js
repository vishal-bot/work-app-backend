// controllers/teamController.js
const pool = require('../config/config');
const TeamService = require('../services/teamService');
const TeamModel = require('../models/teamModel')

exports.getAllMembers = async (req, res) => {
    try {
        const team = await TeamService.getAllMembers();
        res.json(team);
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
};

exports.getMembersByTeam = async (req, res) => {
  const { teamId } = req.params;
  try {
      const team1 = await TeamService.getMembersByTeam(teamId);
      res.json(team1);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getMember = async (req, res) => {
  const { memberId } = req.params;
  try {
      const member = await TeamModel.getMember(memberId);
      res.json(member);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
};