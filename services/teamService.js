// services/teamService.js
const TeamModel = require('../models/teamModel');

class TeamService {
  static async getAllMembers() {
    return await TeamModel.getAllMembers();
  }

  // Other service methods for task-related business logic
}

module.exports = TeamService;
