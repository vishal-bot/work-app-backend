// models/taskModel.js
const pool = require('../config/config');

class TeamModel {
  static async getAllMembers() {
    const query = 'SELECT * FROM "public"."team_members"';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async getMember(memberId) {
    const query = 'SELECT * FROM "public"."team_members" WHERE member_id = $1';
    const { rows } = await pool.query(query, [memberId]);
    return rows[0];
  }

  static async getMembersByTeam(teamId) {
    const query = 'SELECT * FROM "public"."team_members" WHERE team_id = $1';
    const { rows } = await pool.query(query, [teamId]);
    return rows;
  }

}

module.exports = TeamModel;