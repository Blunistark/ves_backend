const pool = require('../config/db');

// Create a new user
const createUser = async (username, password, role, email) => {
  const query = `
    INSERT INTO users (username, password, role, email)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [username, password, role, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get a user by username
const getUserByUsername = async (username) => {
  const query = 'SELECT * FROM users WHERE username = $1';
  const values = [username];

  try {
      const result = await pool.query(query, values); // Use pool.query to execute the query
      return result.rows[0]; // Return the first user found
  } catch (error) {
      console.error('Error fetching user by username:', error);
      throw error;
  }
};

// Get a user by ID
const getUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM users WHERE email = $1';
  const values = [email];

  try {
      const result = await pool.query(query, values); // Execute the query
      return result.rows[0]; // Return the first user found
  } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
  }
};

module.exports = { createUser, getUserByUsername, getUserById , getUserByEmail };