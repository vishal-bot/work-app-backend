// services/authService.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const UserModel = require('../models/userModel');

exports.login = async (username, password) => {
  const user = await UserModel.findByEmail(username);
  if (!user) throw new Error('User not found');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) throw new Error('Invalid password');

  const token = jwt.sign({ user: user.id }, config.jwtSecret, { expiresIn: '1h' });
  return token;
};

// Other service methods for registration, logout, etc.
exports.register = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create(username, hashedPassword);
  };

//   const pool = require('../config/db');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// const JWT_SECRET = require('jsonwebtoken');

// // Service method to register a new user
// exports.register = async (name, username, password, role) => {
//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // Insert user into the database
//     const { rows } = await pool.query('INSERT INTO users (name, username, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [name, username, hashedPassword, role]);
//     // Return the newly created user
//     return rows[0];
//   } catch (error) {
//     throw new Error('Registration failed');
//   }
// };

// // Service method to authenticate user
// exports.login = async (username, password) => {
//   try {
//     // Fetch user from the database
//     const { rows } = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     const user = rows[0];
//     if (!user) {
//       throw new Error('User not found');
//     }
//     // Compare passwords
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       throw new Error('Invalid password');
//     }
//     // Create and return JWT token
//     const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
//     return token;
//   } catch (error) {
//     throw new Error('Authentication failed');
//   }
// };

// // Service method to verify JWT token
// exports.verifyToken = (token) => {
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     return decoded;
//   } catch (error) {
//     throw new Error('Invalid token');
//   }
// };
