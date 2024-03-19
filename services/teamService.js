// services/teamService.js
const TeamModel = require('../models/teamModel');

class TeamService {
  static async getAllMembers() {
    return await TeamModel.getAllMembers();
  }

  // Other service methods for task-related business logic
  static async getMembersByTeam(teamId) {
    return await TeamModel.getMembersByTeam(teamId);
  }
}

module.exports = TeamService;
