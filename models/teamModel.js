// models/taskModel.js
const pool = require('../config/config');

class TeamModel {
  static async getAllMembers() {
    const query = 'SELECT * FROM "public"."team_members"';
    const { rows } = await pool.query(query);
    return rows;
  }

}

module.exports = TeamModel;