// models/userModel.js
const pool = require('../config/config');

class UserModel {
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }

  // Other model methods for user-related operations
}

module.exports = UserModel;
