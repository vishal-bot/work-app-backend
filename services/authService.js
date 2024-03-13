// // services/authService.js
const UserModel = require('../models/userModel');

const pool = require('../config/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'qwertyuiop';

// Service method to register a new user
exports.register = async (name, username, password, role) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert user into the database
    const { rows } = await pool.query('INSERT INTO users (name, username, password, role) VALUES ($1, $2, $3, $4) RETURNING *', [name, username, hashedPassword, role]);
    // Return the newly created user
    return rows[0];
  } catch (error) {
    throw new Error('Registration failed');
  }
};

// Service method to authenticate user
exports.login = async (username, password) => {
  try {
    // Fetch user from the database
    const user = await UserModel.findByUsername(username);
    if (!user) {
      throw new Error('User not found');
    }
    // Compare passwords
    // const isPasswordMatch = await bcrypt.compare(password, user.password);
    // if (!isPasswordMatch) {
    //   throw new Error('Invalid password');
    // }
    if(password != user.password) {
      throw new Error('Invalid password');
    }
    // Create and return JWT token
    const token = jwt.sign({ user: user }, JWT_SECRET, { expiresIn: '1h' });
    user.token = token;
    // console.log(token);
    return user;
  } catch (error) {
    throw new Error('Authentication failed');
  }
};

// Service method to verify JWT token
exports.verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user;
    next();
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};
