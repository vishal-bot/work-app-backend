// models/userModel.js
const pool = require('../config/config');

class UserModel {
  static async findByEmail(username) {
    const query = 'SELECT * FROM users WHERE username = $1';
    const { rows } = await pool.query(query, [username]);
    return rows[0];
  }

  // Other model methods for user-related operations
}

module.exports = UserModel;
