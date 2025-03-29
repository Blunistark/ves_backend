const pool = require('../config/db');

// Create a new admin
const createAdmin = async (userId, firstName, lastName) => {
  const query = `
    INSERT INTO admins (user_id, first_name, last_name)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [userId, firstName, lastName];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Get an admin by ID
const getAdminById = async (id) => {
  const query = `SELECT * FROM admins WHERE id = $1;`;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Get all admins
const getAllAdmins = async () => {
  const query = `SELECT * FROM admins;`;
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { createAdmin, getAdminById, getAllAdmins };