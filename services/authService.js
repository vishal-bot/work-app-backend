// // services/authService.js
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const config = require('../config/config');
// const UserModel = require('../models/userModel');

// exports.login = async (email, password) => {
//   const user = await UserModel.findByEmail(email);
//   if (!user) throw new Error('User not found');

//   const validPassword = await bcrypt.compare(password, user.password);
//   if (!validPassword) throw new Error('Invalid password');

//   const token = jwt.sign({ user: user.id }, config.jwtSecret, { expiresIn: '1h' });
//   return token;
// };

// // Other service methods for registration, logout, etc.
// exports.register = async (email, password) => {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await UserModel.create(email, hashedPassword);
//   };

//   const pool = require('../config/db');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const JWT_SECRET = require('jsonwebtoken');

// Service method to register a new user
exports.register = async (name, email, password, role) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user into the database
    const { rows } = await pool.query('INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, hashedPassword, role]);
    // Return the newly created user
    return rows[0];
  } catch (error) {
    throw new Error('Registration failed');
  }
};

// Service method to authenticate user
exports.login = async (email, password) => {
  try {
    // Fetch user from the database
    const { rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = rows[0];
    if (!user) {
      throw new Error('User not found');
    }
    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('Invalid password');
    }
    // Create and return JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    return token;
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

// Service method to verify JWT token
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
